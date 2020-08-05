import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, 
  AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy
  , SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native None
})
export class ServerElementComponent implements OnInit 
,OnChanges
,DoCheck
,AfterViewChecked
,AfterViewInit
,AfterContentInit
,AfterContentChecked
,OnDestroy{
  @Input("srvEelment") element: {type: string, name: string, content: string}
  @Input("name") name: string
  @ViewChild('heading', {static: false}) heading: ElementRef;
  @ContentChild('content', {static: false}) content: ElementRef;
  constructor() 
  { 
    console.log('Constructor Called!');
  }
  ngOnInit() 
  {
    console.log('ngOnInit Called!');
  }
  ngOnChanges(changes: SimpleChanges)
  {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }
  ngDoCheck()
  {
    console.log('ngDoCheck Called!');
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit Called!');
    console.log("Heading : " + this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Called!');
    console.log("Heading : " + this.heading.nativeElement.textContent);
  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit Called!');
    console.log("Content : " + this.content.nativeElement.textContent);
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked Called!');
    console.log("Content : " + this.content.nativeElement.textContent);
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy Called!');
  }

  
}

