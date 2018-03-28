console.log('say hi');
import { HttpModule } from '../lib/http.module';
import { environment } from '../environment/environment';

document.addEventListener("DOMContentLoaded", () => {
    var http: HttpModule = new HttpModule();
    console.log('Say hi');
    http.get(environment.test, (res) => {
        console.log(res);
    },
    (err) => {
        console.log(err);
    });
}, false);