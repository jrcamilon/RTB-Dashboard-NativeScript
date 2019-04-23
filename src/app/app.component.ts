import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
const platformModule = require("tns-core-modules/platform");


require( "nativescript-localstorage" );


const envParams = {
    dev: "https://rtb-dev.corp.adobe.com/",
    prod: "https://rtb.corp.adobe.com/",
}

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit {

    public webViewSrc: string = envParams.prod;

    @ViewChild("myWebView") webViewRef: ElementRef;

    ngOnInit() {
        this.checkPlatformType();
    }

    checkPlatformType() {
        let message = "";
        if (platformModule.isAndroid) {
            message = "You are using Android device";
        } else if (platformModule.isIOS) {
            message = "You are using IOS device";
        }

        console.log(message);
    }

    ngAfterViewInit() {

    }
}


