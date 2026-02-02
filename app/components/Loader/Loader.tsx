import CircularProgress from '@mui/material/CircularProgress';

const LoadingBox = () => (
  <div className="flex flex-col items-center justify-center pt-1 mt-1 sm:mt-8 md:mt-10 lg:mt-0 xl:mt-10 2xl:mt-10">
    {/* Loader */}
    <CircularProgress
      style={{
        color: 'rgb(112 184 214 / var(--tw-bg-opacity))',
        marginTop: '60px',
      }}
    />

    {/* Texto de carga */}
    <h2
      className="font-site text-center"
      style={{
        color: '#454545',
        fontSize: '23px',
        lineHeight: '30px',
        height: '83px',
        marginTop: '10px', // Ajusta el margen superior según sea necesario
      }}
    >
      Cargando
    </h2>
  </div>
);

export default LoadingBox;
