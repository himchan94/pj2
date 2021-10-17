import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Scroll = () => {
  return (
    <List
      sx={{
        width: "100%",

        bgcolor: "#D3D3D3",
        position: "relative",
        overflow: "auto",
        maxHeight: 200,
        marginTop: "15px",
      }}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default Scroll;
