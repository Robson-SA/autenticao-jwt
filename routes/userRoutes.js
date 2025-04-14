import expres from 'express';

const router = expres.Router();

// Resposta "Auth api" da requisão GET.
router.get('/', (req, res) => {
    res.send('Auth api')
});

export default router;