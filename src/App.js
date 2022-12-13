import MainHome from './Components/mainHome';
import Signin from './Components/signin';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import UserHome from './Components/User/userHome';
import Transaction from './Components/User/SubComponents/transaction';
import TransactionHistory from './Components/User/SubComponents/Transhistory';
import Deposit from './Components/User/SubComponents/deposit';
import Profile from './Components/User/SubComponents/profile';
import CreateProfile from './Components/User/SubComponents/createProfile';
import CreateAccount from './Components/User/SubComponents/createAccount';
import Updateprofile from './Components/User/SubComponents/updateprofile';
import Loan from './Components/User/SubComponents/loan';
import Mailform from './Components/User/SubComponents/mailform';
import ManagerHome from './Components/Manager/managerHome';
import ManageAccount from './Components/subComponents/manageAccount';
import ManagerProfileUpdate from './Components/subComponents/managerProfileUpdate';
import Mail from './Components/subComponents/mail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHome/>} />
      <Route path='/login' element={<Signin/>} />
      <Route path='/userhome' element={<UserHome/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/transhistory" element={<TransactionHistory/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/createprofile" element={<CreateProfile/>}/>
      <Route path="/createaccount" element={<CreateAccount/>}/>
      <Route path="/updateprofile" element={<Updateprofile/>}/>
      <Route path="/loan" element={<Loan/>}/>
      <Route path="/mail" element={<Mailform/>}/>
      {/* manager */}
      <Route path="/managerhome" element={<ManagerHome/>}/>
      <Route path="/manageacc" element={<ManageAccount/>}/>
      <Route path="/profileUpdate" element={<ManagerProfileUpdate/>}/>   
      <Route path="/request" element={<Mail/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
