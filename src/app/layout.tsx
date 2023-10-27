import { GlobalContextProvider } from "@/context/user";
import "../styles/globals.css";
import { SideBarContextProvider } from "@/context/sidebar";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/favicon.png"
        />
        <title>Soft UI Dashboard Tailwind</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/css/nucleo-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/css/nucleo-svg.css"
          rel="stylesheet"
        />

        <link
          href="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
      </head>
      <body className="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500">
      <GlobalContextProvider >
        <SideBarContextProvider>
        {children}
        </SideBarContextProvider>
        </GlobalContextProvider>
      </body>
      <script
        src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/js/plugins/chartjs.min.js"
        async
      ></script>
      <script
        src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/js/plugins/perfect-scrollbar.min.js"
        async
      ></script>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script
        src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/js/soft-ui-dashboard-tailwind.js?v=1.0.5"
        async
      ></script>
    </html>
  );
}
