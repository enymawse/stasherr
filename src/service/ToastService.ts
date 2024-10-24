import { Styles } from "../enums/Styles";

export default class ToastService {
  public static showToast(message: string, isSuccess: boolean = true): void {
    const toastContainer = document.querySelector(".ToastContainer");
    if (toastContainer) {
      const customToast = document.createElement("div");
      customToast.className = "Toast";
      customToast.style.cssText = Styles.Toast.style(isSuccess);
      customToast.innerText = message;
      toastContainer.appendChild(customToast);
      setTimeout(() => customToast.remove(), 5000);
    } else {
      console.log("ToastContainer not found.");
    }
  }
}
