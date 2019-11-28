import { Component, OnInit } from '@angular/core';
import { LotteryService } from "./lottery.service";
import { Lottery } from "./Lottery";

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {
  arr = Array;
  allLotteries: Lottery[] = [];
  latestExpect;
  hoverIdx = -1;
  myLottery = {
    expect: -1,
    redcode: [1, 3, 7, 8, 24, 27],
    bluecode: 4
  };

  constructor(private api: LotteryService) { }

  ngOnInit() {
    this.api.getAllLotteries().subscribe(res => {
      this.allLotteries = JSON.parse(res._body).map(data => {
        let openCode = data.opencode.split("+");
        return {
          expect: data.expect,
          redcode: openCode[0].split(",").map(d => +d),
          bluecode: +openCode[1]
        };
      });

      if(this.allLotteries.length > 0) {
        this.latestExpect = this.allLotteries[this.allLotteries.length - 1].expect;
        this.myLottery.expect = this.latestExpect + 1;
      } else {
        this.latestExpect = 0;
      }
    });
  }

  getLotteries(count: number) {
    debugger;
    var _this = this;
    this.api.getLotteries(count).subscribe(res => {
      let data = res._body.data;
      let saveData = data.filter(function(d) {
        return +d.expect > _this.latestExpect;
      }).reverse();
      this.latestExpect = +data[0].expect;
      this.myLottery.expect = this.latestExpect + 1;

      if(saveData.length > 0) {
        this.api.saveLotteries(saveData).subscribe(res => {
          let newData = saveData.map(x => {
            let openCode = x.opencode.split("+");
            return {
              expect: x.expect,
              redcode: openCode[0].split(",").map(d => +d),
              bluecode: +openCode[1]
            };
          });
          this.allLotteries = this.allLotteries.concat(newData);
        });
      } else {
        // 已经是最新
      }
    });
  }

}
