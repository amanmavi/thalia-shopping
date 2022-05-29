import React from "react";

const rooms = [
  {
    id: "1",
    place: "London",
    address: "Wembley Park Blvd, Wembley HA9 OFD,London",
    website: "shop@athemes.com",
    contactNo: "+1-123-456-789",
  },
  {
    id: "2",

    place: "Glasgow",
    address: "44, 68A E Mews, Glasgow B2 4BF",
    website: "shop@athemes.com",
    contactNo: "+1-123-456-789",
  },
  {
    id: "3",

    place: "London",
    address: "Unit SU 301 Bullring Shopping Centre, Birmingham",
    website: "shop@athemes.com",
    contactNo: "+1-123-456-789",
  },
];

const ShowroomInfo = () => {
  return (
    <div className="grid h-128">
      <div
        className="w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("images/store.jpg")' }}
      >
        <div className="flex flex-col md:flex-row justify-center gap-24 py-6 h-full items-end bg-slate-500/25">
          {rooms.map((room) => (
            <div
              className="space-y-2 w-full text-center text-white hover:text-primary"
              key={room.id}
            >
              <p className="text-2xl  font-bold">{room.place} Showroom</p>
              <p>{room.address}</p>
              <p>{room.website}</p>
              <p>{room.contactNo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowroomInfo;
