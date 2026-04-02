import Swal from "sweetalert2";

export const successAlert = (msg) =>
  Swal.fire({
    title: "<p class='uppercase font-bold dark'>"+ msg +"</p>",
    icon: "success",
    confirmButtonText: "OKAY",
    width: 600,
    padding: "3em",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(137, 122, 95, 0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    customClass: {
      confirmButton: "cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-on-primary text-sm font-bold tracking-wider uppercase transition-all hover:opacity-90 active:scale-95 shadow-sm",
    },
    buttonsStyling: false // Crucial for custom button classes
  });

export const errorAlert = (msg) =>
  Swal.fire("Error", msg, "error");