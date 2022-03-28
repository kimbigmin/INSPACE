import toast from "../js/common/toast.js";
import AbstractView from "./AbstractView.js";
import { BASE_URL } from "../js/common/api.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InSpace");
  }
  getHtml() {
    return `
    <style>
      @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
    </style>
    <div class="bg">
      <main class="sign-in">
        <aside class="left">
          <div class="logo_container">
          <h1>inspace</h1>
          </div>
        </aside>
        <article class="right">
          <div class="find_container">
            <div id="toast"></div>
            <div class="sign-in_title">Find <br> Password</div>
            <form class="find_form">
              <div class="form-floating mb-3">
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Name"
              />
                <label for="name">Name</label>
              </div>

            <div class="form-floating mb-3">
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="email">Email</label>
            </div>
            </form>
            <div class="btn_container">
            <a href='/' data-link><button class="btn btn-cancel">Cancel</button></a>
            <a href='/find' data-link><button class="btn btn-signup">임시비밀번호 발급</button></a>
            </div>
          </div>
        </article>
      </main>
    </div>
  `;
  }

  defaultFunc() {
    const $passwordReqBtn = document.querySelector(".btn-signup");

    $passwordReqBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      const user = {
        userName: name,
        userId: email,
      };

      fetch(`${BASE_URL}/reset-password`, {
        method: "POST",
        body: JSON.stringify(user),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          toast("임시 비밀번호가 발급되었습니다.");
        } else {
          toast("정보를 입력해주세요.");
        }
      });
    });
  }
}
