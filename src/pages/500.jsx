import Link from 'next/link';

export const ServerInternalError = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '1.6rem'
      }}
    >
      <h1>Erro 500 - Erro interno do servidor!</h1>
      <Link
        href={'/'}
        style={{
          fontSize: '2.4rem',
          textDecoration: 'underline',
          color: '#b30d16'
        }}
      >
        Voltar para o Início
      </Link>
    </div>
  );
};

export default ServerInternalError;
