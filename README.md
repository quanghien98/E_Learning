# E-Learning: ReactJS Project
------
## Cập nhật những thay đổi chính trong dự án 
## Lưu ý
Kể từ lần cập nhật này, mọi thay đổi về sau khuyến nghị được ghi lại ở file này để cả nhóm có thể theo dõi.
Dưới đây là những mục nên được xem là **có thể ảnh hưởng nhiều** đến dự án (có thể được bổ sung về sau):
1. Cấu trúc thư mục
2. Các tính năng liên quan đến điều hướng và quản lý dữ liệu (vd: react-router-dom, redux, react-redux,...)
## ChangeLog #001.01-10-19: - ✔️ ***approved by the whole team***
### Cài đặt redux store cho toàn dự án
#### 1. Tổng quan về `configureStore.js`- file store tách biệt khỏi `index.js` 
Thông thường, khi cài đặt store, file `index.js` của dự án sẽ tương tự như sau:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import MasterRouter from "./Router";
/* ------------- React router ------------ */
/* ---------------- style ---------------- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

// redux
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./Reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <MasterRouter />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

```
Có thể thấy, import quá nhiều component vào file này sẽ làm cho code khó quản lý. Vì thế, changelog này đề xuất tách toàn bộ store ra thành file mới là `configureStore.js` để dể quản lý hơn.

Các module thêm vào để tạo store trong file `configureStore.js` bao gồm: `redux`, `react-redux`, `redux-thunk`, `redux-devtools-extension`, và `redux-logger`.

Một số module mà trong quá trình học ta chưa dược giới thiệu là `redux-devtools-exstension`và `redux-logger` cần được đề xuất thêm vào dự án.
  * **`redux-devtools-extension`**: Thực chất chính là Redux DevTools Extension mà ta được giới thiệu, khi viết vào file `index.js` thì có dòng dài ngoằng như sau:   
 ```javascript
  const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
```
   *  Vì thế, đề xuất sử dụng module `redux-devtools-extension` sẽ giúp code viết gọn hơn, cụ thể như sau:
   ```javascript
  // ... giả sử các file liên quan đã được import
  import { composeWithDevTools } from "redux-devtools-extension";

  const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )
   ```
  * **redux-logger**: Là một công cụ hỗ trợ theo dõi action ngay tại console của browser (như hình bên dưới). Công cụ này cho ta biết action nào được gọi, prevState (state khi chưa có action) và nextState (state sau khi gọi action) với những payload tương ứng trên redux-store. `redux-logger` nên được dùng chung với `redux-devtools-extension` để quản lý action trong quá trình chạy thử website.
  <img src="https://avdqsw.bn.files.1drv.com/y4mAyvS2Zep_Z-wm3GLVX4Ost1JXHPzxJUjW-eiqLHnrtFmPdu7OaZCa0SV1UMJdwzqrOTJdSzYAcIwCFLAkGNbqKLgeSy8Re1fjT3zAsHk4qKptKNQ542zytxJgLWnybR3mAhaUAsvVD3K1m97wtEG9gzEZoisRu11hybKw88WgEzA6DTsjl8dh2gWWUUHOVzverFkPD1pnw9O20RBZUCBlA?width=1921&height=417&cropmode=none"/>
     
#### 2. Tiến hành cài đặt `configureStore.js`
* Import các component từ các module cần thiết:
```javascript
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import rootReducer from "./reducers/rootReducer";
```
* Tạo phương thức `configureStore()`: 
```javascript 
const configureStore = () => {
// định nghĩa middlewares và compose 
// bên trong phương thức này
}
```
* Thành phần bên trong hàm như sau:
```javascript
const configureStore = () => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  // truyền mảng các middlewares cần dùng vào 
  // phương thức composeWithDevTools() để sử dụng
  // trên browser
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
  // tạo store với phương thức createStore(), với tham số
  // là rootReducer và tập hợp các middlewares sau khi đã compose,
  // rồi trả về store
  const store = createStore(rootReducer, middlewareEnhancer);
  return store;
};
```
* Như vậy, file `configureStore.js` hoàn chỉnh có nội dung như sau:
```javascript
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const configureStore = () => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
  const store = createStore(rootReducer, middlewareEnhancer);
  return store;
};

export default configureStore;
```
#### 3. Sử dụng `configureStore` tại `index.js`
* Sau khi thiết lập `configureStore` ta có được file `index.js` với nội dung khá ngắn gọn như sau:
```javascript 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

/* ------------- redux store ------------- */
import { Provider } from "react-redux";
import configureStore from "./configureStore";

/* ------------- react router ------------ */
import MasterRouter from "./Router";

/* ---------------- style ---------------- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MasterRouter />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

```
### Đề xuất xóa/thay thế một số file và folder
#### 1. Xác định rõ ràng mục đích của thư mục `/components/layouts`
* Thư mục này giúp tạo ra một số component định hình trang web như header (gồm có NavBar), carousel và footer (có Footer là component chính), thường không dùng chứa dữ liệu và xử lý tác vụ (ngoại trừ NavBar).
* Vì thế, các component như CourseList, CourseItem dùng xử lý dữ liệu nên đặt chúng vào `/components/layouts` là chưa phù hợp
#### 2. Chuyển thư mục CourseList qua /containers
* Như đã nêu trên, CourseList và CourseItem nên ở trong thư mục containers để tiện chứa và xử lý dữ liệu (và thực hiện styling tại component tương ứng)
#### 3. Xóa thư mục `/view`
* Từ đầu, view được quy định chứa các component để gọi api. Tuy nhiên, do các component trong `/containers` vốn là stateful nên có thể thực hiện lấy dữ liệu từ api (thông qua `ComponentDidMount()`), gửi lên redux store và đồng thời hiển thị ra màn hình. Vì thế, các component trong view có thể không cần thiết
* Vì các component trong `/containers` có thể hiển thị dữ liệu, ta có thêm lựa chọn là đổi tên `/containers` thành `/view`. Vậy đề xuất cuối cùng là: hoặc *xóa thư mục `/view`*, hoặc *chuyển các component từ `/containers` sang `/view` và xóa `/containers`*.
#### 4. Cấu trúc thư mục hoàn chỉnh sau đề xuất điều chỉnh
Vui lòng kiểm tra toàn bộ các thư mục trong nhánh này, `thinhle_redux-store`, để xem toàn bộ thay đổi trong cấu trúc thư mục