import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReadService } from "../read.service";
import { ReadLater } from "./read-later";

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.component.html',
  styleUrls: ['./read-later.component.scss']
})
export class ReadLaterComponent implements OnInit {
  showAdd: boolean = false;
  allReads: ReadLater[] = [];
  addForm: FormGroup;
  searchGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ReadService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      url: [null, Validators.required],
      tags: [null, Validators.required]
    });

    this.searchGroup = this.formBuilder.group({
      searchStr: [null]
    });

    this.api.getAllReads().subscribe(res => {
      this.allReads = JSON.parse(res._body);
    });
  }
  
  toggleAdd() {
    this.showAdd = !this.showAdd;
  }

  addRead() {
    let formValue = this.addForm.value;
    formValue.tags = formValue.tags.split(",");
    this.api.addRead(formValue).subscribe(res => {
      console.log(res);
      this.allReads.push(res._body);
    });
  }

  deleteRead() {}

  filterReads(type) {}

  markAsRead() {}
}
