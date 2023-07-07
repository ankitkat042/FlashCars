import React, { Component } from 'react';
import VehicleService from '../../services/vehicles/VehicleService';

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      typeFuel: '',
      typeRide: '',
      wifi: 0,
      ac: 0,
      company: '',
      model: '',
      vin: '',
    };

    this.changeColorHandler = this.changeColorHandler.bind(this);
    this.changeFuelHandler = this.changeFuelHandler.bind(this);
    this.changeRideHandler = this.changeRideHandler.bind(this);
    this.changeWifiHandler = this.changeWifiHandler.bind(this);
    this.changeAcHandler = this.changeAcHandler.bind(this);
    this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeVinHandler = this.changeVinHandler.bind(this);

    this.saveVehicle = this.saveVehicle.bind(this);
  }

  saveVehicle = (e) => {
    e.preventDefault();
    let vehicle = {
      color: this.state.color,
      typeFuel: this.state.typeFuel,
      typeRide: this.state.typeRide,
      wifi: this.state.wifi,
      ac: this.state.ac,
      company: this.state.company,
      model: this.state.model,
      vin: this.state.vin,
    };
    VehicleService.postVehicle(vehicle).then((res) => {
      this.props.history.push('/vehicles');
    });
    console.log('vehicle => ' + JSON.stringify(vehicle));
  };

  cancel() {
    this.props.history.push('/vehicles');
  }

  changeColorHandler = (event) => {
    this.setState({ color: event.target.value });
  };

  changeFuelHandler = (event) => {
    this.setState({ typeFuel: event.target.value });
  };

  changeRideHandler = (event) => {
    this.setState({ typeRide: event.target.value });
  };

  changeWifiHandler = (event) => {
    this.setState({ wifi: event.target.value });
  };

  changeAcHandler = (event) => {
    this.setState({ ac: event.target.value });
  };

  changeCompanyHandler = (event) => {
    this.setState({ company: event.target.value });
  };

  changeModelHandler = (event) => {
    this.setState({ model: event.target.value });
  };

  changeVinHandler = (event) => {
    this.setState({ vin: event.target.value });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Vehicle</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Color: </label>
                    <select
                      placeholder='Color'
                      name='color'
                      className='form-control'
                      value={this.state.color}
                      onChange={this.changeColorHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='red'>Red</option>
                      <option value='blue'>Blue</option>
                      <option value='green'>Green</option>
                      <option value='yellow'>Yellow</option>
                      <option value='orange'>Orange</option>
                      <option value='light-green'>Light Green</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Fuel Type: </label>
                    <select
                      placeholder='Fuel Type'
                      name='typeFuel'
                      className='form-control'
                      value={this.state.typeFuel}
                      onChange={this.changeFuelHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='diesel'>Diesel</option>
                      <option value='petrol'>Petrol</option>
                      <option value='electric'>Electric</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Ride Type: </label>
                    <select
                      placeholder='Ride Type'
                      name='typeRide'
                      className='form-control'
                      value={this.state.typeRide}
                      onChange={this.changeRideHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='sedan'>Sedan</option>
                      <option value='hatchback'>Hatchback</option>
                      <option value='bike'>Bike</option>
                      <option value='suv'>SUV</option>
                      <option value='auto'>Auto</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Wifi: </label>
                    <select
                      placeholder='Wifi'
                      name='wifi'
                      className='form-control'
                      value={this.state.wifi}
                      onChange={this.changeWifiHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Ac: </label>
                    <select
                      placeholder='Ac'
                      name='ac'
                      className='form-control'
                      value={this.state.ac}
                      onChange={this.changeAcHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Company: </label>
                    <select
                      placeholder='Company'
                      name='company'
                      className='form-control'
                      value={this.state.company}
                      onChange={this.changeCompanyHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='Volkswagen'>Volkswagen</option>
                      <option value='Nissan'>Nissan</option>
                      <option value='Mercedes-Benz'>Mercedes-Benz</option>
                      <option value='Audi         '>Audi </option>
                      <option value='Honda        '>Honda </option>
                      <option value='Volvo        '>Volvo </option>
                      <option value='Ford         '>Ford </option>
                      <option value='Chrysler     '>Chrysler </option>
                      <option value='Cadillac     '>Cadillac </option>
                      <option value='GMC          '>GMC </option>
                      <option value='Chevrolet    '>Chevrolet </option>
                      <option value='Oldsmobile   '>Oldsmobile </option>
                      <option value='Acura        '>Acura </option>
                      <option value='Land Rover   '>Land Rover </option>
                      <option value='Mercury      '>Mercury </option>
                      <option value='Aston Martin '>Aston Martin </option>
                      <option value='Subaru       '>Subaru </option>
                      <option value='Dodge        '>Dodge </option>
                      <option value='Alfa Romeo   '>Alfa Romeo </option>
                      <option value='Holden       '>Holden </option>
                      <option value='Toyota       '>Toyota </option>
                      <option value='Mazda        '>Mazda </option>
                      <option value='Saturn       '>Saturn </option>
                      <option value='Hummer       '>Hummer </option>
                      <option value='Infiniti     '>Infiniti </option>
                      <option value='Jaguar       '>Jaguar </option>
                      <option value='Buick        '>Buick </option>
                      <option value='Eagle        '>Eagle </option>
                      <option value='Lamborghini  '>Lamborghini </option>
                      <option value='Geo          '>Geo </option>
                      <option value='Isuzu        '>Isuzu </option>
                      <option value='Plymouth     '>Plymouth </option>
                      <option value='Ferrari      '>Ferrari </option>
                      <option value='BMW          '>BMW </option>
                      <option value='Lexus        '>Lexus </option>
                      <option value='Jeep         '>Jeep </option>
                      <option value='Hyundai      '>Hyundai </option>
                      <option value='Pontiac      '>Pontiac </option>
                      <option value='MINI         '>MINI </option>
                      <option value='Daewoo       '>Daewoo </option>
                      <option value='Mitsubishi   '>Mitsubishi </option>
                      <option value='Lincoln      '>Lincoln </option>
                      <option value='Kia          '>Kia </option>
                      <option value='Saab         '>Saab </option>
                      <option value='Suzuki       '>Suzuki </option>
                      <option value='Panoz        '>Panoz </option>
                      <option value='Porsche      '>Porsche </option>
                      <option value='Maserati     '>Maserati </option>
                      <option value='Bentley      '>Bentley </option>
                      <option value='Scion        '>Scion </option>
                      <option value='Fillmore     '>Fillmore </option>
                      <option value='Lotus        '>Lotus </option>
                      <option value='Ram          '>Ram </option>
                      <option value='Austin       '>Austin </option>
                      <option value='Maybach      '>Maybach </option>
                      <option value='Peugeot      '>Peugeot </option>
                      <option value='Rolls-Royce  '>Rolls-Royce </option>
                      <option value='Fiat         '>Fiat </option>
                      <option value='Bugatti      '>Bugatti </option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Model: </label>
                    <select
                      placeholder='Model'
                      name='model'
                      className='form-control'
                      value={this.state.model}
                      onChange={this.changeModelHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='Passat                 '>Passat </option>
                      <option value='Murano                 '>Murano </option>
                      <option value='C-Class                '>C-Class </option>
                      <option value='A3                     '>A3 </option>
                      <option value='riolet                 '>riolet </option>
                      <option value='CR-V                   '>CR-V </option>
                      <option value='940                    '>940 </option>
                      <option value='Thunderbird            '>
                        Thunderbird{' '}
                      </option>
                      <option value='Town & Country         '>
                        Town & Country{' '}
                      </option>
                      <option value='XLR-V                  '>XLR-V </option>
                      <option value='Yukon XL 1500          '>
                        Yukon XL 1500{' '}
                      </option>
                      <option value='Camaro                 '>Camaro </option>
                      <option value='Intrigue               '>Intrigue </option>
                      <option value='S60                    '>S60 </option>
                      <option value='Caprice                '>Caprice </option>
                      <option value='NSX                    '>NSX </option>
                      <option value='Discovery              '>
                        Discovery{' '}
                      </option>
                      <option value='Capri                  '>Capri </option>
                      <option value='GTI                    '>GTI </option>
                      <option value='V8 Vantage             '>
                        V8 Vantage{' '}
                      </option>
                      <option value='Escort                 '>Escort </option>
                      <option value='Envoy                  '>Envoy </option>
                      <option value='Brat                   '>Brat </option>
                      <option value='Ram 1500 Club          '>
                        Ram 1500 Club{' '}
                      </option>
                      <option value='164                    '>164 </option>
                      <option value='Caravan                '>Caravan </option>
                      <option value='VS Commodore           '>
                        VS Commodore{' '}
                      </option>
                      <option value='Explorer Sport         '>
                        Explorer Sport{' '}
                      </option>
                      <option value='Savana 2500            '>
                        Savana 2500{' '}
                      </option>
                      <option value='Jetta                  '>Jetta </option>
                      <option value='Yaris                  '>Yaris </option>
                      <option value='Familia                '>Familia </option>
                      <option value='Millenia               '>Millenia </option>
                      <option value='Silhouette             '>
                        Silhouette{' '}
                      </option>
                      <option value='Ion                    '>Ion </option>
                      <option value='Corvette               '>Corvette </option>
                      <option value='H3T                    '>H3T </option>
                      <option value='QX56                   '>QX56 </option>
                      <option value='SSR                    '>SSR </option>
                      <option value='Yukon                  '>Yukon </option>
                      <option value='F150                   '>F150 </option>
                      <option value='Cougar                 '>Cougar </option>
                      <option value='XK Series              '>
                        XK Series{' '}
                      </option>
                      <option value='Villager               '>Villager </option>
                      <option value='MX-5                   '>MX-5 </option>
                      <option value='Riviera                '>Riviera </option>
                      <option value='Outlook                '>Outlook </option>
                      <option value='Talon                  '>Talon </option>
                      <option value='Diablo                 '>Diablo </option>
                      <option value='TL                     '>TL </option>
                      <option value='Prizm                  '>Prizm </option>
                      <option value='Vigor                  '>Vigor </option>
                      <option value='XC70                   '>XC70 </option>
                      <option value='Sportvan G30           '>
                        Sportvan G30{' '}
                      </option>
                      <option value='Impulse                '>Impulse </option>
                      <option value='Century                '>Century </option>
                      <option value='Acclaim                '>Acclaim </option>
                      <option value='F-Series               '>F-Series </option>
                      <option value='Jimmy                  '>Jimmy </option>
                      <option value='Loyale                 '>Loyale </option>
                      <option value='Silverado 1500         '>
                        Silverado 1500{' '}
                      </option>
                      <option value='F430                   '>F430 </option>
                      <option value='Ram Van 3500           '>
                        Ram Van 3500{' '}
                      </option>
                      <option value='M6                     '>M6 </option>
                      <option value='S10 Blazer             '>
                        S10 Blazer{' '}
                      </option>
                      <option value='GS                     '>GS </option>
                      <option value='MDX                    '>MDX </option>
                      <option value='Rodeo                  '>Rodeo </option>
                      <option value='SC                     '>SC </option>
                      <option value='240SX                  '>240SX </option>
                      <option value='J                      '>J </option>
                      <option value='Wrangler               '>Wrangler </option>
                      <option value='Econoline E150         '>
                        Econoline E150{' '}
                      </option>
                      <option value='Safari                 '>Safari </option>
                      <option value='Veloster               '>Veloster </option>
                      <option value='GTO                    '>GTO </option>
                      <option value='Cooper Clubman         '>
                        Cooper Clubman{' '}
                      </option>
                      <option value='300M                   '>300M </option>
                      <option value='Nubira                 '>Nubira </option>
                      <option value='Accent                 '>Accent </option>
                      <option value='Neon                   '>Neon </option>
                      <option value='Silverado 3500         '>
                        Silverado 3500{' '}
                      </option>
                      <option value='H2 SUT                 '>H2 SUT </option>
                      <option value='Eclipse                '>Eclipse </option>
                      <option value='Supra                  '>Supra </option>
                      <option value='Cooper                 '>Cooper </option>
                      <option value='A8                     '>A8 </option>
                      <option value='Express 1500           '>
                        Express 1500{' '}
                      </option>
                      <option value='Sierra 2500            '>
                        Sierra 2500{' '}
                      </option>
                      <option value='SL-Class               '>SL-Class </option>
                      <option value='Lanos                  '>Lanos </option>
                      <option value='G                      '>G </option>
                      <option value='MKZ                    '>MKZ </option>
                      <option value='Silverado 3500HD       '>
                        Silverado 3500HD{' '}
                      </option>
                      <option value='Trooper                '>Trooper </option>
                      <option value='Challenger             '>
                        Challenger{' '}
                      </option>
                      <option value='Precis                 '>Precis </option>
                      <option value='Mariner                '>Mariner </option>
                      <option value='S-Class                '>S-Class </option>
                      <option value='MR2                    '>MR2 </option>
                      <option value='Blazer                 '>Blazer </option>
                      <option value='Charger                '>Charger </option>
                      <option value='Rio                    '>Rio </option>
                      <option value='F250                   '>F250 </option>
                      <option value='CTS                    '>CTS </option>
                      <option value='i-350                  '>i-350 </option>
                      <option value='Legacy                 '>Legacy </option>
                      <option value='Tiburon                '>Tiburon </option>
                      <option value='Land Cruiser           '>
                        Land Cruiser{' '}
                      </option>
                      <option value='Previa                 '>Previa </option>
                      <option value='Suburban 2500          '>
                        Suburban 2500{' '}
                      </option>
                      <option value='Mazda3                 '>Mazda3 </option>
                      <option value='Solstice               '>Solstice </option>
                      <option value='Flex                   '>Flex </option>
                      <option value='Type 2                 '>Type 2 </option>
                      <option value='Colt                   '>Colt </option>
                      <option value='Dakota Club            '>
                        Dakota Club{' '}
                      </option>
                      <option value='S40                    '>S40 </option>
                      <option value='Stratus                '>Stratus </option>
                      <option value='530                    '>530 </option>
                      <option value='Mustang                '>Mustang </option>
                      <option value='Dakota                 '>Dakota </option>
                      <option value='Rendezvous             '>
                        Rendezvous{' '}
                      </option>
                      <option value='LS                     '>LS </option>
                      <option value='X6                     '>X6 </option>
                      <option value='9000                   '>9000 </option>
                      <option value='Trans Sport            '>
                        Trans Sport{' '}
                      </option>
                      <option value='Grand Cherokee         '>
                        Grand Cherokee{' '}
                      </option>
                      <option value='Focus                  '>Focus </option>
                      <option value='GL-Class               '>GL-Class </option>
                      <option value='850                    '>850 </option>
                      <option value='T100                   '>T100 </option>
                      <option value='XL-7                   '>XL-7 </option>
                      <option value='H3                     '>H3 </option>
                      <option value='Mark VIII              '>
                        Mark VIII{' '}
                      </option>
                      <option value='Probe                  '>Probe </option>
                      <option value='M Roadster             '>
                        M Roadster{' '}
                      </option>
                      <option value='G-Series G20           '>
                        G-Series G20{' '}
                      </option>
                      <option value='Esperante              '>
                        Esperante{' '}
                      </option>
                      <option value='5 Series               '>5 Series </option>
                      <option value='Cayman                 '>Cayman </option>
                      <option value='Voyager                '>Voyager </option>
                      <option value='Town Car               '>Town Car </option>
                      <option value='Camry                  '>Camry </option>
                      <option value='Gallardo               '>Gallardo </option>
                      <option value='Pathfinder             '>
                        Pathfinder{' '}
                      </option>
                      <option value='GranTurismo            '>
                        GranTurismo{' '}
                      </option>
                      <option value='LTD Crown Victoria     '>
                        LTD Crown Victoria{' '}
                      </option>
                      <option value='Explorer               '>Explorer </option>
                      <option value='Sixty Special          '>
                        Sixty Special{' '}
                      </option>
                      <option value='Equator                '>Equator </option>
                      <option value='Escalade               '>Escalade </option>
                      <option value='C70                    '>C70 </option>
                      <option value='Durango                '>Durango </option>
                      <option value='Elantra                '>Elantra </option>
                      <option value='Cayenne                '>Cayenne </option>
                      <option value='Grand Vitara           '>
                        Grand Vitara{' '}
                      </option>
                      <option value='Ram 2500 Club          '>
                        Ram 2500 Club{' '}
                      </option>
                      <option value='L300                   '>L300 </option>
                      <option value='XC90                   '>XC90 </option>
                      <option value='Protege                '>Protege </option>
                      <option value='Optima                 '>Optima </option>
                      <option value='Ascender               '>Ascender </option>
                      <option value='S80                    '>S80 </option>
                      <option value='GX                     '>GX </option>
                      <option value='Avalanche              '>
                        Avalanche{' '}
                      </option>
                      <option value='S-Series               '>S-Series </option>
                      <option value='Xtra                   '>Xtra </option>
                      <option value='A5                     '>A5 </option>
                      <option value='M                      '>M </option>
                      <option value='Rally Wagon 2500       '>
                        Rally Wagon 2500{' '}
                      </option>
                      <option value='Miata MX-5             '>
                        Miata MX-5{' '}
                      </option>
                      <option value='E-Class                '>E-Class </option>
                      <option value='Maxima                 '>Maxima </option>
                      <option value='MX-3                   '>MX-3 </option>
                      <option value='SLK-Class              '>
                        SLK-Class{' '}
                      </option>
                      <option value='Reatta                 '>Reatta </option>
                      <option value='NV1500                 '>NV1500 </option>
                      <option value='Patriot                '>Patriot </option>
                      <option value='Tahoe                  '>Tahoe </option>
                      <option value='Q5                     '>Q5 </option>
                      <option value='Alcyone SVX            '>
                        Alcyone SVX{' '}
                      </option>
                      <option value='RX Hybrid              '>
                        RX Hybrid{' '}
                      </option>
                      <option value='300                    '>300 </option>
                      <option value='Cobalt SS              '>
                        Cobalt SS{' '}
                      </option>
                      <option value='Amigo                  '>Amigo </option>
                      <option value='Tucson                 '>Tucson </option>
                      <option value='Sedona                 '>Sedona </option>
                      <option value='Outlander Sport        '>
                        Outlander Sport{' '}
                      </option>
                      <option value='Quattroporte           '>
                        Quattroporte{' '}
                      </option>
                      <option value='5000S                  '>5000S </option>
                      <option value='Transit Connect        '>
                        Transit Connect{' '}
                      </option>
                      <option value='Leone                  '>Leone </option>
                      <option value='Forenza                '>Forenza </option>
                      <option value='Paseo                  '>Paseo </option>
                      <option value='Skylark                '>Skylark </option>
                      <option value='Yukon XL 2500          '>
                        Yukon XL 2500{' '}
                      </option>
                      <option value='Contour                '>Contour </option>
                      <option value='Concorde               '>Concorde </option>
                      <option value='XC60                   '>XC60 </option>
                      <option value='Continental GTC        '>
                        Continental GTC{' '}
                      </option>
                      <option value='Grand Am               '>Grand Am </option>
                      <option value='XT                     '>XT </option>
                      <option value='Outlander              '>
                        Outlander{' '}
                      </option>
                      <option value='M3                     '>M3 </option>
                      <option value='G-Class                '>G-Class </option>
                      <option value='650                    '>650 </option>
                      <option value='Coachbuilder           '>
                        Coachbuilder{' '}
                      </option>
                      <option value='Cobalt                 '>Cobalt </option>
                      <option value='S4                     '>S4 </option>
                      <option value='Freestar               '>Freestar </option>
                      <option value='Golf                   '>Golf </option>
                      <option value='Ram Wagon B250         '>
                        Ram Wagon B250{' '}
                      </option>
                      <option value='Topaz                  '>Topaz </option>
                      <option value='Leaf                   '>Leaf </option>
                      <option value='Lumina                 '>Lumina </option>
                      <option value='Terraza                '>Terraza </option>
                      <option value='Eurovan                '>Eurovan </option>
                      <option value='tC                     '>tC </option>
                      <option value='Scirocco               '>Scirocco </option>
                      <option value='90                     '>90 </option>
                      <option value='D350                   '>D350 </option>
                      <option value='RL                     '>RL </option>
                      <option value='F350                   '>F350 </option>
                      <option value='DeVille                '>DeVille </option>
                      <option value='Seville                '>Seville </option>
                      <option value='Firebird               '>Firebird </option>
                      <option value='Bronco                 '>Bronco </option>
                      <option value='G-Series 1500          '>
                        G-Series 1500{' '}
                      </option>
                      <option value='Dynasty                '>Dynasty </option>
                      <option value='Odyssey                '>Odyssey </option>
                      <option value='Pajero                 '>Pajero </option>
                      <option value='Daewoo Magnus          '>
                        Daewoo Magnus{' '}
                      </option>
                      <option value='Sable                  '>Sable </option>
                      <option value='Cirrus                 '>Cirrus </option>
                      <option value='A4                     '>A4 </option>
                      <option value='Caliber                '>Caliber </option>
                      <option value='Ram Van B250           '>
                        Ram Van B250{' '}
                      </option>
                      <option value='Grand Prix             '>
                        Grand Prix{' '}
                      </option>
                      <option value='Fillmore               '>Fillmore </option>
                      <option value='Shadow                 '>Shadow </option>
                      <option value='Vision                 '>Vision </option>
                      <option value='RX-8                   '>RX-8 </option>
                      <option value='Sebring                '>Sebring </option>
                      <option value='Mountaineer            '>
                        Mountaineer{' '}
                      </option>
                      <option value='G-Series G30           '>
                        G-Series G30{' '}
                      </option>
                      <option value='Avalanche 2500         '>
                        Avalanche 2500{' '}
                      </option>
                      <option value='1500                   '>1500 </option>
                      <option value='Z4                     '>Z4 </option>
                      <option value='ZDX                    '>ZDX </option>
                      <option value='Freelander             '>
                        Freelander{' '}
                      </option>
                      <option value='E250                   '>E250 </option>
                      <option value='Impala                 '>Impala </option>
                      <option value='Vandura G1500          '>
                        Vandura G1500{' '}
                      </option>
                      <option value='Fusion                 '>Fusion </option>
                      <option value='Gemini                 '>Gemini </option>
                      <option value='500E                   '>500E </option>
                      <option value='Astro                  '>Astro </option>
                      <option value='Ram 3500               '>Ram 3500 </option>
                      <option value='Sonoma                 '>Sonoma </option>
                      <option value='MX-6                   '>MX-6 </option>
                      <option value='Q                      '>Q </option>
                      <option value='2500                   '>2500 </option>
                      <option value='Rondo                  '>Rondo </option>
                      <option value='Regency                '>Regency </option>
                      <option value='H1                     '>H1 </option>
                      <option value='Ciera                  '>Ciera </option>
                      <option value='Element                '>Element </option>
                      <option value='Range Rover            '>
                        Range Rover{' '}
                      </option>
                      <option value='Vandura 1500           '>
                        Vandura 1500{' '}
                      </option>
                      <option value='W201                   '>W201 </option>
                      <option value='929                    '>929 </option>
                      <option value='Rodeo Sport            '>
                        Rodeo Sport{' '}
                      </option>
                      <option value='Galant                 '>Galant </option>
                      <option value='Park Avenue            '>
                        Park Avenue{' '}
                      </option>
                      <option value='XK                     '>XK </option>
                      <option value='Bravada                '>Bravada </option>
                      <option value='LHS                    '>LHS </option>
                      <option value='Escalade ESV           '>
                        Escalade ESV{' '}
                      </option>
                      <option value='Sierra 1500            '>
                        Sierra 1500{' '}
                      </option>
                      <option value='Swift                  '>Swift </option>
                      <option value='Sorento                '>Sorento </option>
                      <option value='X3                     '>X3 </option>
                      <option value='Mazdaspeed 3           '>
                        Mazdaspeed 3{' '}
                      </option>
                      <option value='4Runner                '>4Runner </option>
                      <option value='100                    '>100 </option>
                      <option value='Accord                 '>Accord </option>
                      <option value='Silverado 2500         '>
                        Silverado 2500{' '}
                      </option>
                      <option value='X5                     '>X5 </option>
                      <option value='Windstar               '>Windstar </option>
                      <option value='Summit                 '>Summit </option>
                      <option value='928                    '>928 </option>
                      <option value='944                    '>944 </option>
                      <option value='Beetle                 '>Beetle </option>
                      <option value='80                     '>80 </option>
                      <option value='Bonneville             '>
                        Bonneville{' '}
                      </option>
                      <option value='Coupe Quattro          '>
                        Coupe Quattro{' '}
                      </option>
                      <option value='Liberty                '>Liberty </option>
                      <option value='Crown Victoria         '>
                        Crown Victoria{' '}
                      </option>
                      <option value='3500                   '>3500 </option>
                      <option value='Continental GT         '>
                        Continental GT{' '}
                      </option>
                      <option value='600                    '>600 </option>
                      <option value='Escalade EXT           '>
                        Escalade EXT{' '}
                      </option>
                      <option value='Tacoma                 '>Tacoma </option>
                      <option value='XJ                     '>XJ </option>
                      <option value='Endeavor               '>Endeavor </option>
                      <option value='RAV4                   '>RAV4 </option>
                      <option value='DBS                    '>DBS </option>
                      <option value='Celica                 '>Celica </option>
                      <option value='Lucerne                '>Lucerne </option>
                      <option value='Tercel                 '>Tercel </option>
                      <option value='HHR                    '>HHR </option>
                      <option value='760                    '>760 </option>
                      <option value='Daytona                '>Daytona </option>
                      <option value='Esprit                 '>Esprit </option>
                      <option value='LX                     '>LX </option>
                      <option value='Suburban 1500          '>
                        Suburban 1500{' '}
                      </option>
                      <option value='Starion                '>Starion </option>
                      <option value='6 Series               '>6 Series </option>
                      <option value='Avalon                 '>Avalon </option>
                      <option value='Rogue                  '>Rogue </option>
                      <option value='LeBaron                '>LeBaron </option>
                      <option value='Mirage                 '>Mirage </option>
                      <option value='Beretta                '>Beretta </option>
                      <option value='GT-R                   '>GT-R </option>
                      <option value='350Z                   '>350Z </option>
                      <option value='RSX                    '>RSX </option>
                      <option value='Grand Marquis          '>
                        Grand Marquis{' '}
                      </option>
                      <option value='Regal                  '>Regal </option>
                      <option value='Montero                '>Montero </option>
                      <option value='DTS                    '>DTS </option>
                      <option value='Malibu                 '>Malibu </option>
                      <option value='Z4 M                   '>Z4 M </option>
                      <option value='Tundra                 '>Tundra </option>
                      <option value='Matrix                 '>Matrix </option>
                      <option value='LeMans                 '>LeMans </option>
                      <option value='300SE                  '>300SE </option>
                      <option value='DB9                    '>DB9 </option>
                      <option value='Canyon                 '>Canyon </option>
                      <option value='Sentra                 '>Sentra </option>
                      <option value='Sonata                 '>Sonata </option>
                      <option value='Touareg                '>Touareg </option>
                      <option value='Raider                 '>Raider </option>
                      <option value='Sonoma Club Coupe      '>
                        Sonoma Club Coupe{' '}
                      </option>
                      <option value='Rainier                '>Rainier </option>
                      <option value='Vibe                   '>Vibe </option>
                      <option value='Civic                  '>Civic </option>
                      <option value='Taurus                 '>Taurus </option>
                      <option value='Corolla                '>Corolla </option>
                      <option value='Diamante               '>Diamante </option>
                      <option value='Impreza                '>Impreza </option>
                      <option value='Outback                '>Outback </option>
                      <option value='Savana 1500            '>
                        Savana 1500{' '}
                      </option>
                      <option value='California             '>
                        California{' '}
                      </option>
                      <option value='Sprinter               '>Sprinter </option>
                      <option value='LaCrosse               '>LaCrosse </option>
                      <option value='Intrepid               '>Intrepid </option>
                      <option value='911                    '>911 </option>
                      <option value='Highlander             '>
                        Highlander{' '}
                      </option>
                      <option value='Viper                  '>Viper </option>
                      <option value='X-Type                 '>X-Type </option>
                      <option value='900                    '>900 </option>
                      <option value='i-MiEV                 '>i-MiEV </option>
                      <option value='Azure                  '>Azure </option>
                      <option value='Altima                 '>Altima </option>
                      <option value='Vitara                 '>Vitara </option>
                      <option value='FJ Cruiser             '>
                        FJ Cruiser{' '}
                      </option>
                      <option value='323                    '>323 </option>
                      <option value='SJ                     '>SJ </option>
                      <option value='Aztek                  '>Aztek </option>
                      <option value='Savana 3500            '>
                        Savana 3500{' '}
                      </option>
                      <option value='9-4X                   '>9-4X </option>
                      <option value='Estate                 '>Estate </option>
                      <option value='Lancer Evolution       '>
                        Lancer Evolution{' '}
                      </option>
                      <option value='Pilot                  '>Pilot </option>
                      <option value='IPL G                  '>IPL G </option>
                      <option value='Countach               '>Countach </option>
                      <option value='VUE                    '>VUE </option>
                      <option value='SRX                    '>SRX </option>
                      <option value='Mini                   '>Mini </option>
                      <option value='Montero Sport          '>
                        Montero Sport{' '}
                      </option>
                      <option value='Magnum                 '>Magnum </option>
                      <option value='Expedition             '>
                        Expedition{' '}
                      </option>
                      <option value='IS                     '>IS </option>
                      <option value='Firefly                '>Firefly </option>
                      <option value='Skyhawk                '>Skyhawk </option>
                      <option value='G8                     '>G8 </option>
                      <option value='Taurus X               '>Taurus X </option>
                      <option value='Ranger                 '>Ranger </option>
                      <option value='S2000                  '>S2000 </option>
                      <option value='RX-7                   '>RX-7 </option>
                      <option value='Montana                '>Montana </option>
                      <option value='PT Cruiser             '>
                        PT Cruiser{' '}
                      </option>
                      <option value='M5                     '>M5 </option>
                      <option value='Suburban               '>Suburban </option>
                      <option value='TT                     '>TT </option>
                      <option value='RX                     '>RX </option>
                      <option value='Cabriolet              '>
                        Cabriolet{' '}
                      </option>
                      <option value='Navigator              '>
                        Navigator{' '}
                      </option>
                      <option value='New Yorker             '>
                        New Yorker{' '}
                      </option>
                      <option value='Lynx                   '>Lynx </option>
                      <option value='Exige                  '>Exige </option>
                      <option value='Ram 1500               '>Ram 1500 </option>
                      <option value='Grand Caravan          '>
                        Grand Caravan{' '}
                      </option>
                      <option value='Ram Van B350           '>
                        Ram Van B350{' '}
                      </option>
                      <option value='98                     '>98 </option>
                      <option value='Astra                  '>Astra </option>
                      <option value='JUKE                   '>JUKE </option>
                      <option value='Eldorado               '>Eldorado </option>
                      <option value='300ZX                  '>300ZX </option>
                      <option value='Z8                     '>Z8 </option>
                      <option value='I                      '>I </option>
                      <option value='Truck                  '>Truck </option>
                      <option value='Stylus                 '>Stylus </option>
                      <option value='Explorer Sport Trac    '>
                        Explorer Sport Trac{' '}
                      </option>
                      <option value='Daewoo Lacetti         '>
                        Daewoo Lacetti{' '}
                      </option>
                      <option value='Galaxie                '>Galaxie </option>
                      <option value='626                    '>626 </option>
                      <option value='Titan                  '>Titan </option>
                      <option value='Mighty Max             '>
                        Mighty Max{' '}
                      </option>
                      <option value='Sportage               '>Sportage </option>
                      <option value='1 Series               '>1 Series </option>
                      <option value='S10                    '>S10 </option>
                      <option value='57                     '>57 </option>
                      <option value='Continental            '>
                        Continental{' '}
                      </option>
                      <option value='CL-Class               '>CL-Class </option>
                      <option value='Golf III               '>Golf III </option>
                      <option value='B-Series               '>B-Series </option>
                      <option value='V70                    '>V70 </option>
                      <option value='Tacoma Xtra            '>
                        Tacoma Xtra{' '}
                      </option>
                      <option value='Quest                  '>Quest </option>
                      <option value='Continental Flying Spur'>
                        Continental Flying Spur
                      </option>
                      <option value='207                    '>207 </option>
                      <option value='B2600                  '>B2600 </option>
                      <option value='CX-9                   '>CX-9 </option>
                      <option value='B-Series Plus          '>
                        B-Series Plus{' '}
                      </option>
                      <option value='D250 Club              '>
                        D250 Club{' '}
                      </option>
                      <option value='Edge                   '>Edge </option>
                      <option value='3 Series               '>3 Series </option>
                      <option value='CTS-V                  '>CTS-V </option>
                      <option value='Prowler                '>Prowler </option>
                      <option value='Tribeca                '>Tribeca </option>
                      <option value='Tempest                '>Tempest </option>
                      <option value='Baja                   '>Baja </option>
                      <option value='V40                    '>V40 </option>
                      <option value='Econoline E250         '>
                        Econoline E250{' '}
                      </option>
                      <option value='Z3                     '>Z3 </option>
                      <option value='G35                    '>G35 </option>
                      <option value='E150                   '>E150 </option>
                      <option value='Aventador              '>
                        Aventador{' '}
                      </option>
                      <option value='Club Wagon             '>
                        Club Wagon{' '}
                      </option>
                      <option value='525                    '>525 </option>
                      <option value='xA                     '>xA </option>
                      <option value='Mazda5                 '>Mazda5 </option>
                      <option value='Vega                   '>Vega </option>
                      <option value='Excursion              '>
                        Excursion{' '}
                      </option>
                      <option value='Defender               '>Defender </option>
                      <option value='IS F                   '>IS F </option>
                      <option value='Xterra                 '>Xterra </option>
                      <option value='Fiesta                 '>Fiesta </option>
                      <option value='Touareg 2              '>
                        Touareg 2{' '}
                      </option>
                      <option value='Sunbird                '>Sunbird </option>
                      <option value='Forester               '>Forester </option>
                      <option value='Aviator                '>Aviator </option>
                      <option value='Phantom                '>Phantom </option>
                      <option value='R32                    '>R32 </option>
                      <option value='Mighty Max Macro       '>
                        Mighty Max Macro{' '}
                      </option>
                      <option value='Prelude                '>Prelude </option>
                      <option value='Electra                '>Electra </option>
                      <option value='Tracker                '>Tracker </option>
                      <option value='80/90                  '>80/90 </option>
                      <option value='Ram Van 2500           '>
                        Ram Van 2500{' '}
                      </option>
                      <option value='Solara                 '>Solara </option>
                      <option value='Range Rover Sport      '>
                        Range Rover Sport{' '}
                      </option>
                      <option value='Tempo                  '>Tempo </option>
                      <option value='Mini Cooper S          '>
                        Mini Cooper S{' '}
                      </option>
                      <option value='LS Hybrid              '>
                        LS Hybrid{' '}
                      </option>
                      <option value='Genesis                '>Genesis </option>
                      <option value='Boxster                '>Boxster </option>
                      <option value='Cavalier               '>Cavalier </option>
                      <option value='ES                     '>ES </option>
                      <option value='Avalanche 1500         '>
                        Avalanche 1500{' '}
                      </option>
                      <option value='V50                    '>V50 </option>
                      <option value='Excel                  '>Excel </option>
                      <option value='400E                   '>400E </option>
                      <option value='9-7X                   '>9-7X </option>
                      <option value='Continental Mark VII   '>
                        Continental Mark VII{' '}
                      </option>
                      <option value='750                    '>750 </option>
                      <option value='MPV                    '>MPV </option>
                      <option value='Sequoia                '>Sequoia </option>
                      <option value='V8                     '>V8 </option>
                      <option value='Sunfire                '>Sunfire </option>
                      <option value='Express 2500           '>
                        Express 2500{' '}
                      </option>
                      <option value='Zephyr                 '>Zephyr </option>
                      <option value='7 Series               '>7 Series </option>
                      <option value='Sienna                 '>Sienna </option>
                      <option value='RS4                    '>RS4 </option>
                      <option value='Silverado              '>
                        Silverado{' '}
                      </option>
                      <option value='CC                     '>CC </option>
                      <option value='HHR Panel              '>
                        HHR Panel{' '}
                      </option>
                      <option value='IS-F                   '>IS-F </option>
                      <option value='Marquis                '>Marquis </option>
                      <option value='Courier                '>Courier </option>
                      <option value='200SX                  '>200SX </option>
                      <option value='Nuova 500              '>
                        Nuova 500{' '}
                      </option>
                      <option value='Esteem                 '>Esteem </option>
                      <option value='Biturbo                '>Biturbo </option>
                      <option value='Veyron                 '>Veyron </option>
                      <option value='3000GT                 '>3000GT </option>
                      <option value='62                     '>62 </option>
                      <option value='Caprice Classic        '>
                        Caprice Classic{' '}
                      </option>
                      <option value='E350                   '>E350 </option>
                      <option value='H2 SUV                 '>H2 SUV </option>
                      <option value='Insight                '>Insight </option>
                      <option value='MKT                    '>MKT </option>
                      <option value='Model T                '>Model T </option>
                      <option value='3500 Club Coupe        '>
                        3500 Club Coupe{' '}
                      </option>
                      <option value='Legend                 '>Legend </option>
                      <option value='Metro                  '>Metro </option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>VIN: </label>
                    <input
                      placeholder='VIN'
                      name='vin'
                      className='form-control'
                      value={this.state.vin}
                      onChange={this.changeVinHandler}
                    />
                  </div>
                  <div className='p-2'></div>
                  <button
                    className='btn btn-success'
                    onClick={this.saveVehicle}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVehicle;
