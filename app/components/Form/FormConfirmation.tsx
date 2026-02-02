'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Typography, Button } from '@mui/material';
import { useWeddingGuestStore } from '@app/store/guest.store';
import { BpRadio } from './BpRadio';
import { ButtonLoader } from './ButtonLoader';

export const FormConfirmation: FC = () => {
  const {
    weddingGuest: wg,
    setConfirmPasses,
    loading,
  } = useWeddingGuestStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const { passconfirmed, comments } = data;
    const confirmation = { ...wg, passconfirmed: +passconfirmed, comments };
    setConfirmPasses(confirmation);
  };

  return wg?.dateconfirmation !== null ? (
    <div className="max-w-7xl mx-auto mb-[60px] sm:mb-[110px] mt-[30px] sm:mt-[180px] relative bg-white px-4 sm:px-8 md:px-20">
      <h1
        className="text-center py-3 font-site text-xl sm:text-2xl md:text-[28px]"
        style={{
          color: '#8d3952',
          lineHeight: '1.2',
        }}
      >
        ¡Gracias por confirmar tu asistencia!
      </h1>
      <div className="max-w-4xl mx-auto">
        <h3
          className="font-site text-sm sm:text-base md:text-md my-3"
          style={{ lineHeight: '1.4' }}
        >
          El día de la fiesta, te invitamos a dirigirte a la entrada del Salón
          Memory&apos;s, donde podrás proporcionar la siguiente información para
          tu acceso:
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-blue-site p-4 sm:p-6 md:p-8"
          style={{
            borderColor: '#8d3952',
            backgroundColor: '#8d3952',
            boxShadow: '1px 1px 7px #64646438',
            color: 'white',
            borderRadius: '1px',
          }}
        >
          <FormControl sx={{ width: '-webkit-fill-available' }}>
            {/* Guest name */}
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="row">
                <FormLabel
                  sx={{
                    fontWeight: '400',
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Pases a nombre de:
                </FormLabel>
                <Typography
                  color={'#8d3952'}
                  sx={{
                    marginTop: '-5px',
                    fontSize: '22px',
                    color: '#333',
                  }}
                >
                  {wg?.family !== null && wg?.family !== ''
                    ? `Familia ${wg?.family}`
                    : wg?.representant !== null
                    ? wg?.representant
                    : 'Cargando...'}
                </Typography>
              </div>
            </div>

            {/* Invotation from */}
            <div
              className="flex flex-col sm:flex-row sm:gap-12"
              style={{ marginTop: '16px' }}
            >
              <div className="row">
                <FormLabel
                  sx={{
                    fontWeight: '400',
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Invitación por parte de:
                </FormLabel>
                <Typography
                  color={'#8d3952'}
                  sx={{
                    marginTop: '-5px',
                    fontSize: '22px',
                    color: '#333',
                  }}
                >
                  {wg?.invitation_from === 'Novio'
                    ? 'La familia'
                    : 'Juanita'}
                </Typography>
              </div>
            </div>

            {/* Number of passes */}
            <div
              className="flex flex-col sm:flex-row sm:gap-12"
              style={{ marginTop: '12px' }}
            >
              <div className="row">
                <FormLabel
                  sx={{
                    fontWeight: '400',
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Pases confirmados:
                </FormLabel>
                <Typography
                  color={'#8d3952'}
                  sx={{
                    marginTop: '-5px',
                    fontSize: '22px',
                    color: '#333',
                  }}
                >
                  {wg?.passconfirmed}
                </Typography>
              </div>
            </div>

            {/* Number of passes */}
            <div
              className="flex flex-col sm:flex-row sm:gap-12"
              style={{
                marginTop: '18px',
                border: '1px solid #fff ',
                padding: '9px 11px',
                borderRadius: '2px',
              }}
            >
              <div className="row">
                <FormLabel
                  sx={{
                    fontWeight: '400',
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Si hay algún cambio con los pases confirmados favor de
                  contactarnos al WhatsApp{' '}
                  <a
                    href="https://wa.me/522281213774"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '18px',
                      color: '#333',
                      fontWeight: 'bolder',
                    }}
                  >
                    +52 1 228 121 3774
                  </a>
                </FormLabel>
              </div>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto mb-[10px] sm:mb-[100px] mt-[30px] sm:mt-[180px] relative bg-white px-8 sm:px-20">
      <h1
        className="text-center py-3 font-site text-xl sm:text-2xl md:text-[28px]"
        style={{
          color: '#8d3952',
          lineHeight: '1.2',
        }}
      >
        Confirma tu asistencia
      </h1>
      <div className="max-w-4xl mx-auto">
        <h3
          className="font-site text-md my-3"
          style={{ lineHeight: '1.25rem' }}
        >
          Por favor, indícanos cuántos pases confirmarías de los que tienes
          disponibles:
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-blue-site p-4 sm:p-6 md:p-8"
        >
          <FormControl sx={{ width: '-webkit-fill-available' }}>
            {/* Guest name */}
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="row">
                <FormLabel
                  sx={{
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Pases a nombre de:
                </FormLabel>
                <Typography
                  color={'#8d3952'}
                  sx={{
                    marginLeft: '24px',
                    marginTop: '5px',
                    marginBottom: '16px',
                    fontSize: '22px',
                  }}
                >
                  {wg?.family !== null && wg?.family !== ''
                    ? `Familia ${wg?.family}`
                    : wg?.representant !== null
                    ? wg?.representant
                    : 'Cargando...'}
                </Typography>
              </div>
            </div>
            {/* Number of passes */}
            <div
              className="flex flex-col sm:flex-row sm:gap-12"
              style={{ marginTop: '12px' }}
            >
              <div className="row">
                <FormLabel
                  sx={{
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Pases disponibles
                </FormLabel>
                <Typography
                  color={'#8d3952'}
                  sx={{
                    marginLeft: '24px',
                    marginTop: '0px',
                    fontSize: '24px',
                  }}
                >
                  {wg?.passavailable}
                </Typography>
              </div>
            </div>
            {/* Passes to confirm (Obligatory field) */}
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="row mb-5 mt-4">
                <FormLabel
                  sx={{
                    color: '#333 !important',
                    '&.Mui-focused': { color: '#333 !important' },
                  }}
                  id="demo-form-control-label-placement"
                >
                  Seleccione pases a confirmar:
                </FormLabel>
                {errors.passconfirmed && (
                  <span
                    style={{
                      color: 'red',
                      fontWeight: 'bolder',
                      display: 'block',
                    }}
                  >
                    Debe seleccionar una cantidad antes de confirmar.
                  </span>
                )}
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="passconfirmed"
                >
                  {[
                    ...Array(wg?.passavailable ? wg?.passavailable + 1 : 0),
                  ].map((_, index) => (
                    <FormControlLabel
                      value={index}
                      control={<BpRadio />}
                      label={index.toString()}
                      key={index}
                      {...register('passconfirmed', {
                        required:
                          'Debe seleccionar una cantidad antes de confirmar',
                      })}
                      labelPlacement="top"
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Comments */}
            {/* <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="row">
                <FormLabel id="demo-form-control-label-placement">
                  Si tienes alguna restricción alimentaria haznola saber:
                </FormLabel>
                <TextField
                  id="comments"
                  multiline
                  maxRows={4}
                  color="secondary"
                  fullWidth={true}
                  variant="standard"
                  {...register('comments')}
                />
              </div>
            </div> */}

            {/* Button to confirm */}
            {loading ? (
              <ButtonLoader />
            ) : (
              <Button type="submit" className="btn-main w-full mt-8 text-xl">
                Confirmar
              </Button>
            )}
          </FormControl>
        </form>
      </div>
    </div>
  );
};
