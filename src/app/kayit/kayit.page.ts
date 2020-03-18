import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.page.html',
  styleUrls: ['./kayit.page.scss'],
})
export class KayitPage implements OnInit {

  userData = { 'name': '', 'email': '', 'username': '', 'password': ''};

  constructor(public restservice:RestService, public router:Router) { }

  ngOnInit() {
  }

  async kayit() {
    this.restservice.veriGonder("kayit", this.userData).subscribe(sonuc=>{console.log(sonuc); this.router.navigateByUrl('/anasayfa');} , err=>{console.log(err);});
  }

}
