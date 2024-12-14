import React from 'react'
import fondo from "../assets/fondo.jpg";
import back from "../assets/background.jpg";

export const MenuCursos = () => {
   return (
    <div style={{ width: "100%", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src={fondo} alt="" width="90%" />
      </header>

      <div style={{ display: "flex",marginTop:"100px"}}>
        {/* Sidebar */}
        <div style={{ width: "25%", paddingRight: "30px"}}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px",marginRight: "40px",leftmargin: "40px"  }}>
            <button style={{ backgroundColor: "#bd8741", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer",color:"white" }}>Cursos Disponibles</button>
            <button style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Cursos Completados</button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ width: "75%", display: "flex" }}>
          {/* PowerApps Card */}
          <div style={{ width: "30%", borderRadius: "10px", textAlign: "center", padding: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSJouvcKHWEDlpfXYFL9bravJLReosd0PSQ&s"
              alt="PowerApps"
              style={{ width: "252px", borderRadius: "10px 10px 0 0",height:"150px" }}
            />
            <div>
              <h4 style={{ margin: "10px 0" }}>PowerApps</h4>
              <p style={{ color: "#6c757d" }}>Sin Completar</p>
              <button style={{ backgroundColor: "#bd8741", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer",color:"white" }}>Curso</button>
            </div>
          </div>

          {/* SharePoint Card */}
          <div style={{ width: "30%", borderRadius: "10px", textAlign: "center", padding: "10px" }}>
            <img
              src="https://www.atptech.com/wp-content/uploads/sharepoint_1.jpg"
              alt="SharePoint"
              style={{ width: "252px", borderRadius: "10px 10px 0 0",height:"150px" }}
            />
            <div>
              <h4 style={{ margin: "10px 0" }}>SharePoint</h4>
              <p style={{ color: "#6c757d" }}>Sin Completar</p>
              <button style={{ backgroundColor: "#bd8741", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer",color:"white" }}>Curso</button>
            </div>
          </div>

          {/* Power Automate Card */}
          <div style={{ width: "30%", borderRadius: "10px", textAlign: "center", padding: "10px" }}>
            <img
              src="https://lh3.googleusercontent.com/proxy/gdLOl9DSFIN8r4s8-d-R0AaOvaqdgepi1eI33DfqMs2RtF_mhibFt7Zgjfsmf62JRdEEO-1QuffPSEbARLUZDUCdYAnUHMw_knclABTYQvH9zD_ekGVBIDPrdPBwsu0hPPPlatk"
              alt="Power Automate"
              style={{ width: "252px",height:"150px", borderRadius: "10px 10px 0 0" }}
            />
            <div>
              <h4 style={{ margin: "10px 0" }}>Power Automate</h4>
              <p style={{ color: "#6c757d" }}>Sin Completar</p>
              <button style={{ backgroundColor: "#bd8741", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer",color:"white" }}>Curso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
