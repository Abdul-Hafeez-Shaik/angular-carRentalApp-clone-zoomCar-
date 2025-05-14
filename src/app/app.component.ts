import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { userRegister } from './Model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'vehicleRentingApp';

  @ViewChild('loginModal') loginModal!: ElementRef;
  @ViewChild('registerModal') registerModal!: ElementRef;

  openLoginModal() {
    if(this.loginModal){
      this.loginModal.nativeElement.style.display = 'block';
    }
  }
  closeLoginModal() {
    if(this.loginModal){
      this.loginModal.nativeElement.style.display = 'none';
    }
  }
  openRegisterModal() {
    if(this.registerModal){
      this.registerModal.nativeElement.style.display = 'block';
    }
  }
  closeRegisterModal() {
    if(this.registerModal){
      this.registerModal.nativeElement.style.display = 'none';
      this.closeLoginModal();
    }
  }

  registerUser: userRegister = new userRegister();
  http = inject(HttpClient);
  api = "https://freeapi.miniprojectideas.com/api/ZoomCar";
  // api = "https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/ZoomCar";
  userLoggedData: any;
  
  ngOnInit(): void {
    const loggedData = localStorage.getItem("zoomUser");
    if(loggedData != null){
      this.userLoggedData = JSON.parse(loggedData);
    }
  }

  onRegister(){
    debugger;
    this.http.post(this.api + "/AddNewUser", this.registerUser).subscribe((res: any) => {
      debugger;
      if(res.result){
        console.log(res);
        alert("User Registered Successfully");
        this.registerUser = new userRegister();
        this.closeRegisterModal();
      } else{
        alert(res.message);
        console.log(res);
      }
    })
  }

  onLogin(){
    this.http.post(this.api + "/Login", this.registerUser).subscribe((res: any)=> {
      if(res.result){
        console.log(res);
        alert("User Login Successfully");
        this.registerUser = new userRegister();
        this.userLoggedData = res.data;
        localStorage.setItem('zoomUser', JSON.stringify(res.data));
        this.closeLoginModal();
      } else{
        alert(res.message);
        console.log(res);
      }
    })
  }

  onLogout(){
    localStorage.removeItem('zoomUser');
    this.userLoggedData = undefined;
  }
}
