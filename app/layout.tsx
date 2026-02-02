import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Fiesta de cumpleaños de Luz Flores</title>
        <meta
          name="description"
          content="Aparta la fecha: 17 de enero del 2026"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/zencommerce/image/upload/v1767375900/luzinvitation_igqaty.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&family=Rouge+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-white bg-gray-900">
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <>
            <Header />
            <main className="bg-gray-900 min-h-[600px] ">{children}</main>
            <div className="mt-10 sm:mt-20">
              <Footer />
            </div>
          </>
        ) : (
          <div className="bg-gray-900 text-white min-h-[600px] max-w-5xl mx-auto p-5">
            Page not available. Please add an environment variable called
            NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
            deployment provider.
          </div>
        )}
      </body>
    </html>
  );
}
