// Feni section
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const feniDonate = getInputFielValuedById("feni-input");
    const feniAmount = getTextFieldValueById("feni-total-amount");
    const fundShowInFeni = getTextFieldValueById("self-fund");
    const feniTitle = document.getElementById("feni-title").innerText;
   
    // ২. ভ্যালিডেশন (চেক করতে হবে ইউজারের ইনপুট 'noakhaiDonate' সঠিক কি না)
    if (isNaN(feniDonate) || feniDonate <= 0) {
      alert("Invalid Donation Amount!");
      return;
    }

    // ৩. নিজের ফান্ডে টাকা আছে কিনা চেক করা (বোনাস টিপস)
    if (feniDonate > fundShowInFeni) {
      alert("Insufficient Balance in your account!");
      return;
    }

    const newBalanceOfFeni = feniAmount + feniDonate;
    document.getElementById("feni-total-amount").innerText = newBalanceOfFeni;

    const selfNewBalance2 = fundShowInFeni - feniDonate;
    document.getElementById("self-fund").innerText = selfNewBalance2;

    document.getElementById("my_modal_1").showModal();

    // history add
    const div = document.createElement("div");
    div.classList.add("bg-white", "p-2", "border", "rounded-xl", "my-1");
    // বর্তমান সময় এবং তারিখ তৈরি করা
    const now = new Date();

    // ডাইনামিক কন্টেন্ট তৈরি
    div.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${feniTitle}</h2>
        <p class="text-gray-500 bg-gray-50 p-2 rounded-lg">
            Date: ${now.toString()}
        </p>
    `;
    document.getElementById("show-donate-history").appendChild(div);
    // ৭. ইনপুট ফিল্ড খালি করে দেওয়া
    document.getElementById("feni-input").value = "";
  });