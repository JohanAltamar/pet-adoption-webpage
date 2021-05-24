const Spinner = () => {
  return (
    <>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gray-200 bg-opacity-60">
        <div className="lds-ellipsis">
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
        </div>
        <h4 className="text-yellow-500 uppercase tracking-widest">Cargando</h4>
      </div>
      <style jsx>{`
        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 8px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 8px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 32px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 56px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
