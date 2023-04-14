const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notify = new Notification("Example Notify...", {
        body: "This Is More Text",
        data: { hello: "world" },
        icon: "Logo.jpg",
        tag: "Welcome Message", // To Over Ride Notification
      });

      notify.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});

// IF WE MOVE TO NEXT PAGE / TAB ( MEANS IT WILL LOST FOCUS OF CURRENT PAGE )
let notify;
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();
    interval = setInterval(() => {
      notify = new Notification(" Come Back Please", {
        body: `You Have Been Gone For ${Math.round(
          (new Date() - leaveDate) / 1000
        )} Seconds.`,
        tag: "Come Back",
      });
    }, 100);
  } else {
    if (interval) closeInterval(interval);
    if (notify) notify.close();
  }
});
