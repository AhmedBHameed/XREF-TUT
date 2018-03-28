/**
 * http module for calling APIs.
 */
declare let window: any;
 export class HttpModule {
    private onSuccess: Function;
    private onFail: Function;
    private type: string;
    private url: string;    
    private data: any;
    constructor() { }

    private _checkFuns(onSuccess: Function, onFail: Function) {
        if( (typeof onSuccess != 'function') || (typeof onFail != 'function') ) {
            console.error('onSuccess, onFail arguments must be type of function.');
            return true;
        } else {
            return false;
        }
    }
    private makeRequest() {
        var xhr;
        if (window.XMLHttpRequest) {
            // code for modern 5,6 browsers
            xhr = new XMLHttpRequest();
         } else {
            // code for old IE 5,6 browsers
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = (e: any) => {
            if(e.readyState == 4 && e.status == 200) {
                // Do acction when there is respond.
                this.onSuccess(e.respond);
            } else {
                this.onFail(e);
            }
        }
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.open(this.type, this.url, true)
        try {
            this.data = JSON.stringify(this.data);
        } catch {
            console.error("Data type must be object!");
        }
        xhr.send(this.data);
    }

    /**
     * HTTP request with GET method
     * @param {string} endpoint
     * @param {function} onSuccess
     * @param {function} onFail
    */
    get(url: string, onSuccess: Function, onFail: Function) {
        this.url = url;
        this.type = 'Get';
        if(this._checkFuns(onSuccess, onFail)) {
            this.onSuccess = onSuccess;
            this.onFail = onFail;
        }
        this.makeRequest();
    }
    post(url: string, data: any, onSuccess: Function, onFail: Function) {
        this.url = url;
        this.type = 'Post';
        this.data = data;
        if(this._checkFuns(onSuccess, onFail)) {
            this.onSuccess = onSuccess;
            this.onFail = onFail;
        }
        this.makeRequest();
    }
 }
// var HttpModule = function(){
//     function httpClass() {
//         this.AJAX = $.ajax;
//     }
//     httpClass.prototype._checkFuns = function(onSuccess, onFail) {
//         if( (typeof onSuccess != 'function') || (typeof onFail != 'function') ) {
//             console.error('onSuccess, onFail arguments must be type of function.');
//             return true;
//         } else {
//             return false;
//         }
//     }
//     /**
//      * HTTP request with GET method
//      * @param {string} endpoint
//      * @param {function} onSuccess
//      * @param {function} onFail
//     */
//     httpClass.prototype.get = function(endpoint, onSuccess, onFail) {
//         if(this._checkFuns(onSuccess, onFail)) {
//             return;
//         }
//         this.AJAX({
//             url: endpoint,
//             type: 'GET',
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             success: onSuccess,
//             error: onFail
//         });
//     }
//     /**
//      * HTTP request with POST method
//      * @param {string} endpoint
//      * @param {any} data
//      * @param {function} onSuccess
//      * @param {function} onFail
//     */
//     httpClass.prototype.post = function(endpoint, data, onSuccess, onFail) {
//         if(this._checkFuns(onSuccess, onFail)){
//             return;
//         }
//         this.AJAX({
//             url: endpoint,
//             type: 'POST',
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             data: JSON.stringify(data),
//             success: onSuccess,
//             error: onFail
//         });
//     }
//     return new httpClass();
// };