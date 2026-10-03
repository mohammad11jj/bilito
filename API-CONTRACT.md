# Bilito - API Contract

## Flight Search

### GET /api/flights/search
**Query Params:**
- origin: string (مثلاً "THR")
- destination: string (مثلاً "IST")
- date: string (YYYY-MM-DD میلادی)
- passengers: number
- class: string (economy | business | first)

**Response 200:**
{
  "success": true,
  "data": {
    "total": 121,
    "flights": [
      {
        "id": "flt_001",
        "airline": { "code": "Gulf Air", "logo": "url" },
        "departure": { "airport": "استانبول", "code": "SAW", "time": "02:50" },
        "arrival": { "airport": "دبی", "code": "DXB", "time": "21:50" },
        "duration": "19h",
        "stops": 0,
        "price": { "amount": 33410462, "currency": "IRT" },
        "baggage": { "cabin": "5kg", "checked": "20kg" },
        "seatsLeft": 5,
        "refundable": false
      }
    ]
  }
}