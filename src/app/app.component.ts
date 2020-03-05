import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { modalDialogComponent } from "./modal-dialog/modal-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Kitchen-plan";
  showModal: boolean = true;

  // injectiong MatDialog
  constructor(public dialog: MatDialog) {}

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  /* employeesStatus() {
   let dialogRef= this.dialog.open(modalDialogComponent, {
      height: "500px",
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog Closed');
      
    })
  } */

  ngOnInit() {}
}
