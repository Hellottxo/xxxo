<template>
  <div class="home">
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>卡片</div>
      </template>
      <div class="content-wrap">
        <xo-card>
          <div>基础卡片</div>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card>
          <template v-slot:header>
            <div>标题</div>
          </template>
          <div>带标题的卡片</div>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card align="left">
          <template v-slot:header>
            <div>左侧对齐卡片</div>
          </template>
          <div>这是一张左侧对齐卡片</div>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card shadow="hover">鼠标悬浮时阴影特效的卡片</xo-card>
      </div>
      <div class="content-wrap">
        <xo-card shadow="always">始终有阴影的卡片</xo-card>
      </div>
      <div class="content-wrap">
        <xo-card :max-height="30" align="left" shadow="hover">
          <template v-slot:header>
            <div>可收起的卡片</div>
          </template>
          <div>
            <div>使用max-height属性固定卡片主体高度</div>
            <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
            <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
          </div>
        </xo-card>
      </div>
    </xo-card>
    <xo-card shadow="hover" :max-height="300">
      <template v-slot:header>
        <div>icon图标</div>
      </template>
      <div>
        <ul class="icon_lists dib-box">
          <li class="dib">
            <span class="icon iconfont icon-arrow-down"></span>
            <div class="name">arrow-down</div>
            <div class="code-name">.icon-arrow-down</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-arrow-right"></span>
            <div class="name">arrow-right</div>
            <div class="code-name">.icon-arrow-right</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-add"></span>
            <div class="name">add</div>
            <div class="code-name">.icon-add</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-add-account"></span>
            <div class="name">add-account</div>
            <div class="code-name">.icon-add-account</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-category"></span>
            <div class="name">category</div>
            <div class="code-name">.icon-category</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-column"></span>
            <div class="name">3column</div>
            <div class="code-name">.icon-column</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-camera"></span>
            <div class="name">camera</div>
            <div class="code-name">.icon-camera</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-clock"></span>
            <div class="name">clock</div>
            <div class="code-name">.icon-clock</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-attachent"></span>
            <div class="name">attachent</div>
            <div class="code-name">.icon-attachent</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-arrow-up"></span>
            <div class="name">arrow-up</div>
            <div class="code-name">.icon-arrow-up</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-arrow-lift"></span>
            <div class="name">arrow-lift</div>
            <div class="code-name">.icon-arrow-lift</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-calendar"></span>
            <div class="name">calendar</div>
            <div class="code-name">.icon-calendar</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-browse"></span>
            <div class="name">browse</div>
            <div class="code-name">.icon-browse</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-ashbin"></span>
            <div class="name">ashbin</div>
            <div class="code-name">.icon-ashbin</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-all"></span>
            <div class="name">all</div>
            <div class="code-name">.icon-all</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-close"></span>
            <div class="name">close</div>
            <div class="code-name">.icon-close</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-bad"></span>
            <div class="name">bad</div>
            <div class="code-name">.icon-bad</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-ascending"></span>
            <div class="name">ascending</div>
            <div class="code-name">.icon-ascending</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-confirm"></span>
            <div class="name">confirm</div>
            <div class="code-name">.icon-confirm</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-cry"></span>
            <div class="name">cry</div>
            <div class="code-name">.icon-cry</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-conditions"></span>
            <div class="name">conditions</div>
            <div class="code-name">.icon-conditions</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-component"></span>
            <div class="name">component</div>
            <div class="code-name">.icon-component</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-comments"></span>
            <div class="name">comments</div>
            <div class="code-name">.icon-comments</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-collection"></span>
            <div class="name">collection</div>
            <div class="code-name">.icon-collection</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-code"></span>
            <div class="name">code</div>
            <div class="code-name">.icon-code</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-download"></span>
            <div class="name">download</div>
            <div class="code-name">.icon-download</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-discount"></span>
            <div class="name">discount</div>
            <div class="code-name">.icon-discount</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-double-arro-right"></span>
            <div class="name">double-arro- right</div>
            <div class="code-name">.icon-double-arro-right</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-coupons"></span>
            <div class="name">coupons</div>
            <div class="code-name">.icon-coupons</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-cut"></span>
            <div class="name">cut</div>
            <div class="code-name">.icon-cut</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-double-arrow-left"></span>
            <div class="name">double-arrow-left</div>
            <div class="code-name">.icon-double-arrow-left</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-ellipsis"></span>
            <div class="name">ellipsis</div>
            <div class="code-name">.icon-ellipsis</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-earth"></span>
            <div class="name">earth</div>
            <div class="code-name">.icon-earth</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-falling"></span>
            <div class="name">falling</div>
            <div class="code-name">.icon-falling</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-good"></span>
            <div class="name">good</div>
            <div class="code-name">.icon-good</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-editor"></span>
            <div class="name">editor</div>
            <div class="code-name">.icon-editor</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-help"></span>
            <div class="name">help</div>
            <div class="code-name">.icon-help</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-hot"></span>
            <div class="name">hot</div>
            <div class="code-name">.icon-hot</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-email"></span>
            <div class="name">email</div>
            <div class="code-name">.icon-email</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-descending"></span>
            <div class="name">descending</div>
            <div class="code-name">.icon-descending</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-data"></span>
            <div class="name">data</div>
            <div class="code-name">.icon-data</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-favorites"></span>
            <div class="name">favorites</div>
            <div class="code-name">.icon-favorites</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-leftbutton"></span>
            <div class="name">left button</div>
            <div class="code-name">.icon-leftbutton</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-move"></span>
            <div class="name">move</div>
            <div class="code-name">.icon-move</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-leftarrow"></span>
            <div class="name">left arrow</div>
            <div class="code-name">.icon-leftarrow</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-map"></span>
            <div class="name">map</div>
            <div class="code-name">.icon-map</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-pic"></span>
            <div class="name">pic</div>
            <div class="code-name">.icon-pic</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Notvisible"></span>
            <div class="name">Not visible</div>
            <div class="code-name">.icon-Notvisible</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-order"></span>
            <div class="name">order</div>
            <div class="code-name">.icon-order</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-prompt"></span>
            <div class="name">prompt</div>
            <div class="code-name">.icon-prompt</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-loading"></span>
            <div class="name">loading</div>
            <div class="code-name">.icon-loading</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-reduce"></span>
            <div class="name">reduce</div>
            <div class="code-name">.icon-reduce</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-pin"></span>
            <div class="name">pin</div>
            <div class="code-name">.icon-pin</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-remind"></span>
            <div class="name">remind</div>
            <div class="code-name">.icon-remind</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-play"></span>
            <div class="name">play</div>
            <div class="code-name">.icon-play</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-return"></span>
            <div class="name">return</div>
            <div class="code-name">.icon-return</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-process"></span>
            <div class="name">process</div>
            <div class="code-name">.icon-process</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Rightarrow"></span>
            <div class="name">Right arrow</div>
            <div class="code-name">.icon-Rightarrow</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-rising"></span>
            <div class="name">rising</div>
            <div class="code-name">.icon-rising</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-password"></span>
            <div class="name">password</div>
            <div class="code-name">.icon-password</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-QRcode"></span>
            <div class="name">QRcode</div>
            <div class="code-name">.icon-QRcode</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-reeor"></span>
            <div class="name">reeor</div>
            <div class="code-name">.icon-reeor</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-smile"></span>
            <div class="name">smile</div>
            <div class="code-name">.icon-smile</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-share"></span>
            <div class="name">share</div>
            <div class="code-name">.icon-share</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-suspended"></span>
            <div class="name">suspended</div>
            <div class="code-name">.icon-suspended</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-stop"></span>
            <div class="name">stop</div>
            <div class="code-name">.icon-stop</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-template"></span>
            <div class="name">template</div>
            <div class="code-name">.icon-template</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-seleted"></span>
            <div class="name">seleted</div>
            <div class="code-name">.icon-seleted</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-sorting"></span>
            <div class="name">sorting</div>
            <div class="code-name">.icon-sorting</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Top"></span>
            <div class="name">Top</div>
            <div class="code-name">.icon-Top</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-success"></span>
            <div class="name">success</div>
            <div class="code-name">.icon-success</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-logistic-logo"></span>
            <div class="name">logistic-logo</div>
            <div class="code-name">.icon-logistic-logo</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-survey"></span>
            <div class="name">survey</div>
            <div class="code-name">.icon-survey</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-shoes"></span>
            <div class="name">shoes</div>
            <div class="code-name">.icon-shoes</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Exportservices"></span>
            <div class="name">Export services</div>
            <div class="code-name">.icon-Exportservices</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-set"></span>
            <div class="name">set</div>
            <div class="code-name">.icon-set</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Rightbutton"></span>
            <div class="name">Right button</div>
            <div class="code-name">.icon-Rightbutton</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-warning"></span>
            <div class="name">warning</div>
            <div class="code-name">.icon-warning</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-topsales"></span>
            <div class="name">top sales</div>
            <div class="code-name">.icon-topsales</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-sound-filling"></span>
            <div class="name">sound-filling</div>
            <div class="code-name">.icon-sound-filling</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Tradingvolume"></span>
            <div class="name">Trading volume</div>
            <div class="code-name">.icon-Tradingvolume</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-viewgallery"></span>
            <div class="name">viewgallery</div>
            <div class="code-name">.icon-viewgallery</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-search"></span>
            <div class="name">search</div>
            <div class="code-name">.icon-search</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-save"></span>
            <div class="name">save</div>
            <div class="code-name">.icon-save</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-viewlarger"></span>
            <div class="name">view larger</div>
            <div class="code-name">.icon-viewlarger</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-suggest"></span>
            <div class="name">suggest</div>
            <div class="code-name">.icon-suggest</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-upload"></span>
            <div class="name">upload</div>
            <div class="code-name">.icon-upload</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-tool"></span>
            <div class="name">tool</div>
            <div class="code-name">.icon-tool</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-viewlist"></span>
            <div class="name">viewlist</div>
            <div class="code-name">.icon-viewlist</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-switch"></span>
            <div class="name">switch</div>
            <div class="code-name">.icon-switch</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-text"></span>
            <div class="name">text</div>
            <div class="code-name">.icon-text</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Daytimemode"></span>
            <div class="name">Daytime mode</div>
            <div class="code-name">.icon-Daytimemode</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-unlock"></span>
            <div class="name">unlock</div>
            <div class="code-name">.icon-unlock</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-VIP"></span>
            <div class="name">VIP</div>
            <div class="code-name">.icon-VIP</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-exchangerate"></span>
            <div class="name">exchange rate</div>
            <div class="code-name">.icon-exchangerate</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-feed-logo"></span>
            <div class="name">feed-logo</div>
            <div class="code-name">.icon-feed-logo</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-exchangerate1"></span>
            <div class="name">exchange rate</div>
            <div class="code-name">.icon-exchangerate1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-account1"></span>
            <div class="name">account</div>
            <div class="code-name">.icon-account1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-add-fill"></span>
            <div class="name">add-fill</div>
            <div class="code-name">.icon-add-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-ashbin-fill"></span>
            <div class="name">ashbin-fill</div>
            <div class="code-name">.icon-ashbin-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-all-fill"></span>
            <div class="name">all-fill</div>
            <div class="code-name">.icon-all-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-bad-fill"></span>
            <div class="name">bad-fill</div>
            <div class="code-name">.icon-bad-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-calendar-fill"></span>
            <div class="name">calendar-fill</div>
            <div class="code-name">.icon-calendar-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-ali-clould-fill"></span>
            <div class="name">ali-clould-fill</div>
            <div class="code-name">.icon-ali-clould-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-collection-fill"></span>
            <div class="name">collection-fill</div>
            <div class="code-name">.icon-collection-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-cry-fill"></span>
            <div class="name">cry-fill</div>
            <div class="code-name">.icon-cry-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-discount-fill"></span>
            <div class="name">discount-fill</div>
            <div class="code-name">.icon-discount-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-email-fill"></span>
            <div class="name">email-fill</div>
            <div class="code-name">.icon-email-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-favorites-fill"></span>
            <div class="name">favorites-fill</div>
            <div class="code-name">.icon-favorites-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-good-fill"></span>
            <div class="name">good-fill</div>
            <div class="code-name">.icon-good-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-home-fill"></span>
            <div class="name">home-fill</div>
            <div class="code-name">.icon-home-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-help1"></span>
            <div class="name">help</div>
            <div class="code-name">.icon-help1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-feed-logo-fill"></span>
            <div class="name">feed-logo-fill</div>
            <div class="code-name">.icon-feed-logo-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-hot-fill"></span>
            <div class="name">hot-fill</div>
            <div class="code-name">.icon-hot-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-insurance-fill"></span>
            <div class="name">insurance-fill</div>
            <div class="code-name">.icon-insurance-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-leftbutton-fill"></span>
            <div class="name">left button-fill</div>
            <div class="code-name">.icon-leftbutton-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-map1"></span>
            <div class="name">map</div>
            <div class="code-name">.icon-map1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-password1"></span>
            <div class="name">password</div>
            <div class="code-name">.icon-password1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-pin-fill"></span>
            <div class="name">pin-fill</div>
            <div class="code-name">.icon-pin-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-play-fill"></span>
            <div class="name">play-fill</div>
            <div class="code-name">.icon-play-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-phone1"></span>
            <div class="name">phone</div>
            <div class="code-name">.icon-phone1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-prompt-fill"></span>
            <div class="name">prompt-fill</div>
            <div class="code-name">.icon-prompt-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-product1"></span>
            <div class="name">product</div>
            <div class="code-name">.icon-product1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-reduce-fill"></span>
            <div class="name">reduce-fill</div>
            <div class="code-name">.icon-reduce-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-reeor-fill"></span>
            <div class="name">reeor-fill</div>
            <div class="code-name">.icon-reeor-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-resonserate-fill"></span>
            <div class="name">resonse rate-fill</div>
            <div class="code-name">.icon-resonserate-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-remind-fill"></span>
            <div class="name">remind-fill</div>
            <div class="code-name">.icon-remind-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Rightbutton-fill"></span>
            <div class="name">Right button-fill</div>
            <div class="code-name">.icon-Rightbutton-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-smile-fill"></span>
            <div class="name">smile-fill</div>
            <div class="code-name">.icon-smile-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-sound-filling-fill"></span>
            <div class="name">sound-filling-fill</div>
            <div class="code-name">.icon-sound-filling-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-sound-Mute1"></span>
            <div class="name">sound-Mute</div>
            <div class="code-name">.icon-sound-Mute1</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-suspended-fill"></span>
            <div class="name">suspended-fill</div>
            <div class="code-name">.icon-suspended-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-success-fill"></span>
            <div class="name">success-fill</div>
            <div class="code-name">.icon-success-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-Top-fill"></span>
            <div class="name">Top-fill</div>
            <div class="code-name">.icon-Top-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-warning-fill"></span>
            <div class="name">warning-fill</div>
            <div class="code-name">.icon-warning-fill</div>
          </li>

          <li class="dib">
            <span class="icon iconfont icon-set1"></span>
            <div class="name">set</div>
            <div class="code-name">.icon-set1</div>
          </li>
        </ul>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>基础按钮</div>
      </template>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="text">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="danger">你好</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" circle icon="search"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="clock" type="primary"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="cry" type="warning"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="collection" type="success"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="hot" type="info"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="VIP" type="danger"></xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" round>你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="danger">你好</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" disabled>你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="danger">你好</xo-button>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>提示消息</div>
      </template>
      <div class="content-wrap">
        <xo-button @click="handleClick">提示消息</xo-button>
        <xo-button @click="handleClick('primary')" type="primary">提示消息</xo-button>
        <xo-button @click="handleClick('warning')" type="warning">提示消息</xo-button>
        <xo-button @click="handleClick('success')" type="success">提示消息</xo-button>
        <xo-button @click="handleClick('info')" type="info">提示消息</xo-button>
        <xo-button @click="handleClick('danger')" type="danger">提示消息</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="handleCloseClick">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('primary')" type="primary">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('warning')" type="warning">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('success')" type="success">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('info')" type="info">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('danger')" type="danger">可关闭消息</xo-button>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>评分</div>
      </template>
      <div class="content-wrap">
        <xo-rate></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="good" rate :defaultStar="1"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="favorites" rate :defaultStar="2" :baseNumber="100"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="smile" rate :defaultStar="3" :baseNumber="200"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="Daytimemode" rate :defaultStar="4" :baseNumber="3"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="hot" readonly rate :defaultStar="4" :baseNumber="3"></xo-rate>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>树形控件</div>
      </template>
      <div class="content-wrap">
        <xo-tree
          :data="treeData"
          node-key="id"
          default-selected="6"
          :default-expand="[0, 3]"
          @node-click="handleNodeClick"
        ></xo-tree>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>输入框</div>
      </template>
      <div class="content-wrap">
        <xo-input></xo-input>
        <xo-input disable placeholder="禁止输入"></xo-input>
        <xo-input clearable placeholder="可清空"></xo-input>
        <xo-input type="password" placeholder="请输入密码"></xo-input>
        <xo-input type="textarea" width="300px" wordLimit :maxLength="30"></xo-input>
        <xo-input type="textarea" width="300px" autoSize></xo-input>
        <xo-input>
          <template v-slot:suffix>
            <i class="iconfont icon-search"></i>
          </template>
        </xo-input>
        <xo-input>
          <template v-slot:prefix>
            <i class="iconfont icon-calendar"></i>
          </template>
        </xo-input>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>选择器</div>
      </template>
      <div class="content-wrap">
        <xo-select clearable v-model="input">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value" :value="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select multiple :width="200">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value" :value="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select multiple :width="200" collapse @change="selectChange">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select
          multiple
          :width="200"
          collapse
          filter
          @change="selectChange"
          @visibleChange="visibleChange"
        >
          <xo-options v-for="item in optionsData" :options="item" :key="item.value">{{item.label}}</xo-options>
        </xo-select>
        <xo-select
          multiple
          :width="200"
          collapse
          filter
          @change="selectChange"
          @visibleChange="visibleChange"
        ></xo-select>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>时间选择器</div>
      </template>
      <xo-time-picker></xo-time-picker>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>表格</div>
      </template>
      <xo-table
        :width="500"
        :heigth="100"
        :columns="columns"
        :data="tableData"
        :verticalLine="true"
        :stripe="true"
        :highlightRow="true"
        @rowClick="rowClick"
      />
    </xo-card>
  </div>
</template>

<script>
const TREE_DATA = [
  {
    id: 0,
    label: "一级1",
    children: [
      { id: 1, label: "二级" },
      { id: 2, label: "二级" },
      {
        id: 3,
        label: "二级",
        children: [{ id: 4, label: "三级" }, { id: 6, label: "三级" }]
      }
    ]
  },
  {
    id: 5,
    label: "一级2",
    children: [
      { id: 7, label: "二级" },
      { id: 8, label: "二级" },
      {
        id: 9,
        label: "二级",
        children: [{ id: 10, label: "三级" }, { id: 11, label: "三级" }]
      }
    ]
  }
];

const OPTIONS_DATA = [
  {
    value: "beijing",
    label: "北京市"
  },
  {
    value: "shanghai",
    label: "上海市"
  },
  {
    value: "shenzhen",
    label: "深圳市"
  },
  {
    value: "hangzhou",
    label: "杭州市"
  },
  {
    value: "nanjing",
    label: "南京市"
  },
  {
    value: "chongqing",
    label: "重庆市"
  }
];

const COLUMNS = [
  {
    label: "Name",
    key: "name",
    width: 100,
  },
  {
    label: "Age",
    key: "age",
    width: 200,
  },
  {
    label: "Address",
    key: "address",
    width: 300,
    fixed: 'start'
  },
  {
    label: 'Sex',
    key: 'Sex',
    width: 100,
    fixed: 'start'
  },
  {
    label: 'Attribute',
    key: 'Attribute',
    width: 100
  }
];

const TABLE_DATA = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    children: [{ name: 'xo' }],
    arrowPosition: 'address'
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    rowExpand: '123'
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04"
  },
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    children: [{ name: 'xo' }],
    arrowPosition: 'address'
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    rowExpand: '123'
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04"
  }
];

export default {
  name: "home",
  data() {
    return {
      collapse: false,
      treeData: TREE_DATA,
      optionsData: OPTIONS_DATA,
      columns: COLUMNS,
      tableData: TABLE_DATA
    };
  },
  methods: {
    handleClick(val) {
      if (val) {
        this.$message({
          type: val,
          message: "这是一个会停顿3s的消息"
        });
        return;
      }
      this.$message({ message: "这是一个会停顿3s的消息" });
    },
    handleCloseClick(val) {
      if (val) {
        this.$message({
          type: val,
          showClose: true,
          message: "这是一个可以手动关闭的消息"
        });
        return;
      }
      this.$message({
        message: "这是一个可以手动关闭的消息",
        showClose: true
      });
    },
    handleNodeClick(item) {
      console.log(item);
    },
    selectChange(val) {
      const arr = val.map(e => e.label);
      console.log(`选择了${arr.join(",")}`);
    },
    visibleChange(val) {
      console.log(`下拉框状态：${val}`);
    },
    rowClick(row) {
      console.log(`点击了行${row}`);
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 10px 0;
  & > div {
    margin: 20px;
    max-width: 1000px;
    .xo-button {
      margin: 0 5px;
    }
  }
  .icon_lists {
    width: 100% !important;
    overflow: hidden;
    *zoom: 1;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
  }

  .icon_lists li {
    width: 100px;
    margin: 10px;
    text-align: center;
    list-style: none !important;
    font-size: 14px;
  }

  .icon_lists li .code-name {
    line-height: 1.2;
  }

  .icon_lists .icon {
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 42px;
    margin: 10px auto;
    color: #333;
    transition: font-size 0.25s linear, width 0.25s linear;
  }

  .icon_lists .icon:hover {
    color: @blue;
    font-size: 62px;
  }

  .icon_lists .svg-icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
        normalize.css 中也包含这行 */
    overflow: hidden;
  }

  .icon_lists li .name,
  .icon_lists li .code-name {
    color: #666;
  }
  .content-wrap {
    margin: 10px;
    & > .xo-input {
      display: flex;
      margin-bottom: 10px;
    }
  }
}
</style>
