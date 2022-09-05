import { Component, OnInit } from "@angular/core";
import { EmployeeDataHandlerService } from "../../Services/employeeDataHandler.service";
import { Router } from "@angular/router";
import { CheckStringPipe } from "../../pipes/checkString.pipe";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
  providers: [CheckStringPipe],
})
export class EmployeeComponent implements OnInit {
  tableData: any;
  tableDataPermanent: any;
  userID: string;
  constructor(
    private employeeDataHandlerService: EmployeeDataHandlerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.populateTable();
  }
  populateTable() {
    this.employeeDataHandlerService.getData().subscribe((dataTable) => {
      this.tableDataPermanent = dataTable.data;
      this.tableData = dataTable.data;
    });
  }

  addEntry() {
    this.router.navigate(["home/" + this.userID]);
  }
  search(value) {
    var temp = [];
    for (let index = 0; index < this.tableDataPermanent.length; index++) {
      if (this.tableDataPermanent[index].name.includes(value)) {
        temp.push(this.tableDataPermanent[index]);
      }
    }
    if (value == "") {
      this.tableData = this.tableDataPermanent;
    }
    this.tableData = temp;
  }
}
