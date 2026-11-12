CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 30),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  request_type text NOT NULL CHECK (char_length(request_type) <= 60),
  machine text CHECK (machine IS NULL OR char_length(machine) <= 120),
  message text NOT NULL CHECK (char_length(message) BETWEEN 5 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a request" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);