// Noakhali Selection
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    // ১. ইনপুট এবং বর্তমান ব্যালেন্সগুলো নেওয়া
    const noakhaliDonate = getInputFielValuedById("noakhali-input");
    const noakhaliAmount = getTextFieldValueById("noakhali-total-amount");
    const fundShowInNoakhali = getTextFieldValueById("self-fund");
    const noakhaliTitle = document.getElementById("noakhali-title").innerText;

    // ২. ভ্যালিডেশন (চেক করতে হবে ইউজারের ইনপুট 'noakhaiDonate' সঠিক কি না)
    if (isNaN(noakhaliDonate) || noakhaliDonate <= 0) {
      alert("Invalid Donation Amount!");
      return;
    }

    // ৩. নিজের ফান্ডে টাকা আছে কিনা চেক করা (বোনাস টিপস)
    if (noakhaliDonate > fundShowInNoakhali) {
      alert("Insufficient Balance in your account!");
      return;
    }

    // ৪. কার্ডের ব্যালেন্স আপডেট করা
    const newBalanceOfNoakhali = noakhaliAmount + noakhaliDonate;
    document.getElementById("noakhali-total-amount").innerText =
      newBalanceOfNoakhali;

    // ৫. মেইন ফান্ড থেকে টাকা কমানো
    const selfNewBalance1 = fundShowInNoakhali - noakhaliDonate;
    document.getElementById("self-fund").innerText = selfNewBalance1;

    // ৬. সফল হলে মডাল দেখানো
    document.getElementById("my_modal_1").showModal();

    // history add
    const div = document.createElement("div");
    div.classList.add("bg-white", "p-2", "border", "rounded-xl", "my-1");
    // বর্তমান সময় এবং তারিখ তৈরি করা
    const now = new Date();

    // ডাইনামিক কন্টেন্ট তৈরি
    div.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${noakhaliTitle}</h2>
        <p class="text-gray-500 bg-gray-50 p-2 rounded-lg">
            Date: ${now.toString()}
        </p>
    `;
    document.getElementById("show-donate-history").appendChild(div);
    // ৭. ইনপুট ফিল্ড খালি করে দেওয়া
    document.getElementById("noakhali-input").value = "";
  });


