import expres from 'express';

const router = expres.Router();

// Resposta "Auth api" da requisão GET.
router.post('/register');

router.post('/login');

router.post('/protected')

export default router;