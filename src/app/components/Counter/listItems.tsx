import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import NavigationIcon from "@mui/icons-material/Navigation";
import PlaceIcon from "@mui/icons-material/Place";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="client">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Cliente" />
    </ListItemButton>
    <ListItemButton href="driver">
      <ListItemIcon>
        <NavigationIcon />
      </ListItemIcon>
      <ListItemText primary="Condutor" />
    </ListItemButton>
    <ListItemButton href="vehicles">
      <ListItemIcon>
        <DirectionsCarIcon />
      </ListItemIcon>
      <ListItemText primary="Veiculo" />
    </ListItemButton>
    <ListItemButton href="travel">
      <ListItemIcon>
        <PlaceIcon />
      </ListItemIcon>
      <ListItemText primary="Deslocamento" />
    </ListItemButton>
    <ListItemButton href="forecast">
      <ListItemIcon>
        <ThermostatIcon />
      </ListItemIcon>
      <ListItemText primary="Previsão do tempo" />
    </ListItemButton>
  </React.Fragment>
);
