import os
import google.generativeai as genai


def GenerateText(data):
    destination = data.get('destination', 'Unknown')
    start_date = data.get('start_date', 'Unknown')  
    end_date = data.get('end_date', 'Unknown')
    genai.configure(api_key="AIzaSyBi8FVBOJMise-6-Qm8VTMvfq-2zs-JHbc") #add the api key which i have shared you in whatsapp here in the double Quotes

    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"create a travel itinerary for a trip to {destination} from {start_date} to {end_date}. Include popular attractions, local cuisine, and cultural experiences. REmember to generate data in JSON format with day-wise breakdown of activities."
    try:
        response = model.generate_content(prompt)
        print("Generated response : ", response.text)
    except Exception as e:
        print("Error generating text:", str(e))
    return response.text
