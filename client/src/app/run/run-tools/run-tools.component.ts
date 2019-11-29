import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-run-tools',
  templateUrl: './run-tools.component.html',
  styleUrls: ['./run-tools.component.scss']
})
export class RunToolsComponent implements OnInit {
  calcForm: FormGroup
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.calcForm = this.formBuilder.group({
      km: [null],
      tHour: [null],
      tMinute: [null],
      tSecond: [null],
      pMinute: [null],
      pSecond: [null]
    });
  }

  calc() {
    let data = this.calcForm.value;
    let m = data.km;
    let t = data.tHour * 3600 + data.tMinute * 60 + data.tSecond;
    let p = data.pMinute * 60 + data.pSecond;

    if(m && t) {
      this.calcPace(m, t);
    }
    
    if(m && p) {
      this.calcTime(m, p);
    }

    if(t && p) {
      this.calcDistance(t, p);
    }
  }

  // 计算配速
  calcPace(distance, time) {
    let pace = time / distance;
    let paceM = Math.floor(pace / 60);
    let paceS = Math.floor(pace % 60);
    let formValues = this.calcForm.value;

    formValues.pMinute = paceM;
    formValues.pSecond = paceS;

    this.calcForm.setValue(formValues);
  }
  
  // 计算时间
  calcTime(distance, pace) {
    let time = distance * pace;
    let hour = Math.floor(time / 3600);
    let minute = Math.floor((time % 3600) / 60);
    let second = Math.floor(time % 3600 % 60);
    let formValues = this.calcForm.value;

    formValues.tHour = hour;
    formValues.tMinute = minute;
    formValues.tSecond = second;

    this.calcForm.setValue(formValues);
  }

  // 计算距离
  calcDistance(time, pace) {
    let distance = time / pace;
    let formValues = this.calcForm.value;

    formValues.km = distance.toFixed(3);
    this.calcForm.setValue(formValues);
  }
}
