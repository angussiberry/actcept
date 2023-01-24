// import React from 'react'
// class EventList extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         upcomingEvents: []
//       };
//     }
  
//     componentDidMount() {
//       fetch('https://example.com/api/upcoming-events')
//         .then(response => response.json())
//         .then(data => {
//           this.setState({
//             upcomingEvents: data
//           });
//         });
//     }
  
//     render() {
//       return (
//         <div>
//           <h2>Upcoming Events</h2>
//           {console.log(this.state.upcomingEvents)}
//           <ul>
//             {this.state.upcomingEvents.map((event, index) => (
//               <li key={index}>{event.name}</li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
//   export default EventListTEST;