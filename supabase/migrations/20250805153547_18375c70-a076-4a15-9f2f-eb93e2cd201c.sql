-- Create table for service bookings
CREATE TABLE public.service_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  service_type TEXT NOT NULL,
  service_details TEXT,
  price_range TEXT NOT NULL,
  payment_code TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.service_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since it's for customer bookings)
CREATE POLICY "Anyone can create bookings" 
ON public.service_bookings 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing all bookings (for admin/staff)
CREATE POLICY "Anyone can view bookings" 
ON public.service_bookings 
FOR SELECT 
USING (true);

-- Create policy to allow updating bookings (for admin/staff)
CREATE POLICY "Anyone can update bookings" 
ON public.service_bookings 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_service_bookings_updated_at
BEFORE UPDATE ON public.service_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();