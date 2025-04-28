import { createDrawerNavigator } from '@react-navigation/drawer';
import AddUser from '../screen/AddUser';
import Attendance from '../screen/Attendance';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
            <Drawer.Screen name="Attendance" component={Attendance} />
      <Drawer.Screen name="Add Users" component={AddUser} />


    
    </Drawer.Navigator>
  );
}