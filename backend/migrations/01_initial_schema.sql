-- PIG Schema (Supabase PostgreSQL)
CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('PF', 'Holding', 'Consulting', 'Shop4Home', 'Construction', 'Pension')),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  bank_name TEXT NOT NULL,
  account_number TEXT NOT NULL,
  balance DECIMAL(15, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  account_id UUID NOT NULL REFERENCES accounts(id),
  description TEXT NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('income', 'expense', 'transfer')),
  date DATE NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
