/**
 * Created by wangmeng on 2017/10/25.
 */

function Product(initInfos) {
    this.initInfo(initInfos);
}
Product.prototype = {
    initInfo:function(info){
        //商品名称
        this.name = info.name;
        //商品价格
        this.price =info.price;
        //折扣价
        this.discountedPrice =info.discountedPrice;
        //商品描述
        this.desc =info.desc;
        //商品图片
        this.imgs =info.imgs;

    },
    bindDom:function(){
        $('#pname').html(this.name);
    }
}