import { Component, OnInit } from '@angular/core';
// import { PushNotificationsModule } from 'ng-push';
import { Router } from '@angular/router';
@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.css']
})
export class PermissionTableComponent implements OnInit {
  Flag={
    location:false,
    camera:false,
    microphone:false,
    notifications: false,
    pop_up:false,
    sync:false,
    clipboard:false 
  };
  Status={
    location:"Not Asked",
    camera:"Not Asked",
    microphone:"Not Asked",
    notifications: "Not Asked",
    pop_up:"Not Asked",
    sync:"Not Asked",
    clipboard:"Not Asked" 
  };
  constructor() { }

  ngOnInit(): void {
  }
  title = 'Get-Access';


  get_location(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.Flag.location=true;
        this.Status.location="Allowed";
      },(error)=>{
        this.Flag.location=true;
        this.Status.location="Blocked";
      }
      );
    } 
  }
  get_camera(){
    const constraints = {
      video: true,
    };    
    if (navigator.mediaDevices  && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints).then((per) => {
        this.Flag.camera=true;
        this.Status.camera="Allowed";
      },(error)=>{
        // console.log(error);
        this.Flag.camera=true;
        this.Status.camera="Blocked";
      }
      );
    }   
  }
  get_microphone(){
    const constraints = {
      audio: true,
    };    
    if (navigator.mediaDevices  && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints).then((per) => {
        this.Flag.microphone=true;
        this.Status.microphone="Allowed";
      },(error)=>{
        // console.log(error);
        this.Flag.microphone=true;
        this.Status.microphone="Blocked";
      }
      );
    }    
  }
  async get_notifications(){

    let now=await Notification.requestPermission();
    if(now==='granted'){
      this.Flag.notifications=true;
      this.Status.notifications="Allowed";
    }
    else{
      this.Flag.notifications=true;
      this.Status.notifications="Blocked";
    }
  }
  get_pop_up(){
    // let r: Router;
    // // r.navigate(app-permission-table);
    // r.navigateByUrl('../app.component.html').then((per) => {
    //   this.Flag.pop_up=true;
    //   this.Status.pop_up="Allowed";
    // },(error)=>{
    //   // console.log(error);
    //   this.Flag.pop_up=true;
    //   this.Status.pop_up="Blocked";
    // }
    // );

  
  }
  get_sync(){
    // navigator.serviceWorker.ready.then(function(reg) {
    //   return reg.sync.register('tag-name');
    // }).catch
  }
  get_clipboard  (){
    navigator.clipboard.readText().then(text =>{
      this.Flag.clipboard=true;
      this.Status.clipboard="Allowed";     
    }).catch(error => {
      this.Flag.clipboard=true;
      this.Status.clipboard="Blocked";
    })
  }
}
