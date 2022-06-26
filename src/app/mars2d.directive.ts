import { Directive, ElementRef, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as mars2d from 'mars2d';


@Directive({
  selector: '[appMars2D]'
})
export class Mars2dDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    //读取 config.json 配置文件
    let configUrl = 'config/config.json'
    mars2d.Util.fetchJson({ url: configUrl })
      .then((data: any) => {
        var mapOptions = data.mars2d
        // 创建三维地球场景
        const map = new mars2d.Map(this.el.nativeElement, mapOptions)
        this.onMapload(map)

        console.log('>>>>> 地图创建成功 >>>>', map)
      })
      .catch(function (error:any) {
        console.log('加载JSON出错', error)
      })
  }


  // 地图构造完成回调
  onMapload(map: mars2d.Map) {
    // 以下为演示代码

  }


}
