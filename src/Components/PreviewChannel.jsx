import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount } from "../features/MontagesSlice.js";

export default function PreviewChannel({ item }) {
  const dispatch = useDispatch();
  const montage = useSelector((state) => state.montage.selectedOption);
  const currentStep = useSelector((state) => state.montage.currentStep);
  const value = montage[item.split("-")[1] - 1]?.[item];

  const CustomButton = (props) => {
    return (
      <Button
        disabled={currentStep > 2 ? true : false}
        variant="outlined"
        {...props}
        sx={{
          border: "2px solid #2F7EC7",
          color: "#2F7EC7",
          ":hover": { border: "2px solid #2F7EC7" },
        }}
      >
        Edit Channel
      </Button>
    );
  };
  return (
    <Box sx={{boxShadow:"0px 3px 20px 4px rgba(0, 0, 0, 0.04)", borderRadius: 2}}>
      <Box
        sx={{
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "space-around",
          display: "grid",
          gridTemplateColumns: "69.297079% 30.702921%",
          gap: "2px",
          mt: 2,
          overflow: "hidden",
        }}
      >
        <div>
          <Box
            sx={{
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "space-around",
              display: "grid",
              gridTemplateColumns:
                "32.2488051769% 32.3444946359% 35.4067001872%",
              gap: "2px",
            }}
          >
            <div
              className="dataPreviewBlock"
              style={{ fontWeight: "700", color: "#0f0f0f" }}
            >
              {item}
            </div>
            <div
              className="dataPreviewBlock"
              style={{ fontWeight: "700", color: "#0f0f0f" }}
            >
              {value?.primary || "null"}
            </div>
            <div
              className="dataPreviewBlock"
              style={{
                marginRight: "2px",
                fontWeight: "700",
                color: "#0f0f0f",
              }}
            >
              {value?.refrence || "null"}
            </div>
          </Box>

          <Box
            sx={{
              borderRadius: "5px",
              alignItems: "center",
              mt: "2px",
              justifyContent: "space-around",
              display:
                value?.backupPrimary.length === 1 &&
                value?.backupPrimary[0] == null &&
                value?.backupRefrence[0] == null
                  ? "none"
                  : "grid",
              gridTemplateColumns: "32.2488051769% 67.7511948231%",
              transform: "translateX(-1px)",
              gap: "2px",
            }}
          >
            <div
              className="dataPreviewBlock"
              style={{ height: "calc(100% - 2px)" }}
            >
              Backup Channels
            </div>
            <Box
              sx={{
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "space-around",
                display: "grid",
                gridTemplateColumns: "48.14010956% 51.85989044%",
                transform: "translateX(-1px)",
                gap: "2px",
              }}
            >
              {value?.backupPrimary?.map((item, index) => {
                if (!((item == null) & (value?.backupRefrence[index] == null)))
                  return (
                    <>
                      <div
                        className="dataPreviewBlock"
                        key={1}
                        style={{ marginLeft: "2px" }}
                      >
                        {item || "null"}
                      </div>
                      <div className="dataPreviewBlock" key={2}>
                        {value?.backupRefrence[index] || "null"}
                      </div>
                    </>
                  );
                else return " ";
              })}
            </Box>
          </Box>
        </div>
        <div className="dataPreviewBlock" style={{ height: "100%" }}>
          <CustomButton
            onClick={() => {
              dispatch(decrementCount());
            }}
          />
        </div>
      </Box>
      </Box>
  );
}
