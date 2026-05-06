UPDATE public.ai_knowledge_articles
SET content = REPLACE(content, 'Amazon, Pyramid Consulting, Stellar Consulting Solutions, Randstad, and Kelly', 'Amazon, Pyramid Consulting, Randstad, and Kelly')
WHERE content LIKE '%Stellar%';