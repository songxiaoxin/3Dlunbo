function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{return getComputedStyle(obj,null)[attr]
	}
}//获取行内样式、外部引用样式
/*获取内容
	obj 要获取或设置内容的对象
	val 要修改的内容
*/
function getText(obj,val){
    if(obj.innerText==undefined){
        if(val==undefined){
            return obj.textContent;
        }else{
            obj.textContent=val;
        }
    }else{
        if(val==undefined){
            return obj.innerText;
        }else{
            obj.innerText=val;
        }
    }
}

/*getClass*/
function getClass(classname,obj){
    var obj=obj||document;
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(classname);
    }else{
        var all=obj.getElementsByTagName("*");
        var arr=[];
        for(var i=0;i<all.length;i++){
            if(checkClass(all[i].className,classname)){
                arr.push(all[i]);
            }
        }
        return arr;
    }
}
/*
objclass 
newclass
*/
function checkClass(objclass,newclass){
    var arr=objclass.split(" ");
    for(var i=0;i<arr.length;i++){
        if(arr[i]==newclass){
            return true;
        }
    }
    return false;
}

// function $(selector,context){
//     var obj=context||document;
//     if(typeof selector==="string"){
//         if(selector.charAt(0)=="."){
//             return getClass(selector.substr(1),obj);
//         }else if(selector.charAt(0)=="#"){
//             return obj.getElementById(selector.substr(1));
//         }else if(/^[a-z][a-z1-6]{1,10}$/.test(selector)){
//             return obj.getElementsByTagName(selector);
//         }else if(/^<[a-z][a-z1-6]{1,10}>$/.test(selector)){
//                 return document.createElement(selector.slice(1,-1));
//         }
//     }else if(typeof selector==="function"){
//         window.onload=function(){
//             selector();
//         }
//     }
// }
function $(selector,context){
    var obj=context||document;
    if(typeof selector=="string"){
        if(selector.charAt(0)=="."){
            return getClass(selector.substr(1),obj)
        }else if(selector.charAt(0)=="#"){
            return obj.getElementById(selector);
        }else if(/^[a-z][1-6a-z]{0,10}$/.test(selector)){
            return obj.getElementsByTagName(selector);
        }
    }else if(typeof selector=="function"){
        return window.onload=function(){
            selector();
        }
    }
}
