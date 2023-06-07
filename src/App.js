function Banner() {
  return(
    <div>
      <h1>SEXTANT</h1>
    </div>
  );
}

function Metrics() {
  return(
    <div>
      <>
        <h4> Communication Metrics</h4>
      </>
        <>
          <table>
           <tr>
             <th>Com Port</th>
           </tr>
           <tr>
             <th>Router</th>
           </tr>
           <tr>
            <th>System 1</th>
           </tr>
          </table>
        </>
    </div>
  );
}

function Livefeed() {
  return(
    <div>
      <>
       <h4>System Connection Feed</h4>
      </>
      <>
        <div class="row">
          <div class="column">
             <div class="card">Port 1</div>
          </div>
          <div>
             <div class="card">Port 2</div>
          </div>
          <div>
            <div class="card">Port 3</div>
          </div>
        </div>
      </>
    </div>
  );
}

function Switches() {
  return(
    <div>
       <>
          <h4>System Port Switch</h4>
       </>
       <>
         <h5>Port 1:</h5><button>ON/OFF</button>
         <h5>Port 2:</h5><button>ON/OFF</button>
         <h5>Port 3:</h5><button>ON/OFF</button>
       </>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
    <Banner />
    <h4>You're Welcome</h4>
    <hr/>
    <Metrics />
    <hr/>
    <Livefeed />
    <hr/>
    <Switches />
    </div>
  );
}
