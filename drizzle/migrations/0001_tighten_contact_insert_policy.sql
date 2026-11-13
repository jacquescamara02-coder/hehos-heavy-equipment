DROP POLICY IF EXISTS "Anyone can submit a request" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a valid request" ON public.contact_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(full_name)) BETWEEN 2 AND 100
  AND char_length(btrim(phone)) BETWEEN 6 AND 30
  AND phone ~ '^[+0-9 ().-]+$'
  AND (email IS NULL OR (char_length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
  AND (company IS NULL OR char_length(company) <= 120)
  AND char_length(request_type) BETWEEN 1 AND 60
  AND (machine IS NULL OR char_length(machine) <= 120)
  AND char_length(btrim(message)) BETWEEN 5 AND 2000
  AND created_at BETWEEN now() - interval '5 minutes' AND now() + interval '5 minutes'
);