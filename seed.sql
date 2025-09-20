-- sample seed
INSERT INTO navigation (title, slug) VALUES ('Books', 'books') ON CONFLICT DO NOTHING;
