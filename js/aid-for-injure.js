document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const quotaDonate = getInputFielValuedById("quota-input");
    const quotaAmount = getTextFieldValueById("quota-total-amount");
    const fundShowInQuota = getTextFieldValueById("self-fund");
    const quotaTitle = document.getElementById("quota-title").innerText;

    if (isNaN(quotaDonate) || quotaDonate <= 0) {
      alert("Invalid Donation Amount!");
      return;
    }

    if (quotaDonate > fundShowInQuota) {
      alert("Insufficient Balance in your account!");
      return;
    }

    const newBalanceOfQuota = quotaAmount + quotaDonate;
    document.getElementById("quota-total-amount").innerText = newBalanceOfQuota;

    const selfNewBalance3 = fundShowInQuota - quotaDonate;
    document.getElementById("self-fund").innerText = selfNewBalance3;

    document.getElementById("my_modal_1").showModal();

    // history section
    const div = document.createElement("div");
    div.classList.add("bg-white", "p-2", "border", "rounded-xl", "my-1");
    const now = new Date();
    div.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${quotaTitle}</h2>
        <p class="text-gray-500 bg-gray-50 p-2 rounded-lg">
            Date: ${now.toString()}
        </p>
    `;

    document.getElementById("show-donate-history").appendChild(div);

    document.getElementById("quota-input").value = "";
  });
