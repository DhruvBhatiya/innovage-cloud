import vehicleRentalSystem from "../../assets/images/projects/vehicle-rental-system.jpg"
import otp from "../../assets/images/projects/otp.png"
import EXPEDITING from "../../assets/images/projects/EXPEDITING.png"
import vendorPerformance from "../../assets/images/projects/vendor-performance.webp"
import timeAttendenceSystem from "../../assets/images/projects/time-attendence-system.jpg"

export const projectData = [
    {
        project: [
            {
                title: "Vehicle Rental System",
                description: "Designed and developed vehicle rental system. Business can list the asset on the system decide the hourly, daily, weekly rates based on asset value and rent the assets.Designed Asset handover/Takeover process also Driver change process. User can book the vehicle for an hour/day/month and extend or early submit the vehicle.Billing generation also designed based on usage of vehicle.",
                imgUrl: vehicleRentalSystem,
                link: '',
                tech: ['VBCS', 'OIC', 'PLSQL']
            },
            {
                title: "Onetime Payment Solution (OTP)",
                description: "Designed and developed VBCS custom application call as OTP this system was designed to generate payable Invoices for the university miscellaneous payment like session charge, trophy, student loan etc.User can login into system and raise the Payable invoice based on the requirement. After raising the Invoices, it was going for approval. Once approval approve the Invoice got create in Oracle SaaS using REST API.",
                imgUrl: otp,
                link: '',
                tech: ['VBCS', 'OIC', 'PLSQL']
            },
            {
                title: "EXPEDITING",
                description: "Involved in designing/converting the Oracle Forms to a Custom ADF Application to create and manage PO, Prepay Invoice based on PO, Latter of Credit Document Etc..Hands-on experience in designing the pages as per the client's requirement.",
                imgUrl: EXPEDITING,
                link: '',
                tech: ['VBCS', 'OIC', 'PLSQL']
            },
            {
                title: "Vendor Performance",
                description: "Developed Vendor Performance Qualification application in VBCS with Oracle DB where business can Evaluate the Vendor Based on Goods Quality, Delivery Time, Capacity and Rates. Understood the requirement from functional team. Developed end-to-end cycle",
                imgUrl: vendorPerformance,
                link: '',
                tech: ['VBCS', 'OIC', 'PLSQL']
            },
            {
                title: "Time Attendence System",
                description: "",
                imgUrl: timeAttendenceSystem,
                link: '',
                tech: ['VBCS', 'OIC', 'PLSQL']
            },
            

        ],
       

    },

];
