'use client';
import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';
import { useWeddingGuestStore } from '@app/store/guest.store';
import testIds from '@app/utils/test-ids';

const Header = () => {
  const { weddingGuest } = useWeddingGuestStore((state) => state);
  return (
    <>
      <header
        className="w-full mt-5 mb-0 px-2 sm:px-8"
        data-testid={testIds.LAYOUT.HEADER}
      >
        <div className="flex  sm:px-14 h-header sm:items-center sm:gap-8">
          <h2 className="flex-1">
            <a
              href={
                weddingGuest?.id !== null
                  ? `/invitados/${weddingGuest?.id}`
                  : '/'
              }
              className="flex flex-col sm:flex-row items-left pl-2  "
            >
              {/* <Logo /> */}
              <div className="max-w-[200px] sm:max-w-none">
                <span
                  className="block font-site text-sm sm:text-base md:text-lg"
                  style={{
                    color: 'rgb(112 184 214 / var(--tw-bg-opacity))',
                    fontWeight: '500',
                    marginBottom: '-9px',
                    lineHeight: '1.2',
                  }}
                >
                  Fiesta de cumpleaños de Luz Flores
                </span>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    paddingTop: '0px',
                    marginTop: '0px',
                  }}
                >
                  17 de enero de 2026
                </span>
              </div>
            </a>
          </h2>
          <div>
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
