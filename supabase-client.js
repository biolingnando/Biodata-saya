// Supabase Client Configuration
// Get from environment variables or use defaults for testing

const SUPABASE_URL = 'https://awkdqmrpqgwjhvpdffng.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3a2RxbXJwcWd3amh2cGRmZm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MDgwNDUsImV4cCI6MjA5NDk4NDA0NX0.Q6nUpfVi8f_P4v0C_JUnP8TrAQH4PFQ6zSPlBuFr54c';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Games CRUD Operations
const gamesAPI = {
  // Get all games
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('[v0] Error getting games:', error);
      return [];
    }
  },

  // Create game
  async create(gameData) {
    try {
      const { data, error } = await supabase
        .from('games')
        .insert([gameData])
        .select();
      
      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('[v0] Error creating game:', error);
      return { success: false, error: error.message };
    }
  },

  // Update game
  async update(id, gameData) {
    try {
      const { data, error } = await supabase
        .from('games')
        .update(gameData)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('[v0] Error updating game:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete game
  async delete(id) {
    try {
      const { error } = await supabase
        .from('games')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('[v0] Error deleting game:', error);
      return { success: false, error: error.message };
    }
  }
};

// Applications CRUD Operations
const appsAPI = {
  // Get all applications
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('[v0] Error getting applications:', error);
      return [];
    }
  },

  // Create application
  async create(appData) {
    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([appData])
        .select();
      
      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('[v0] Error creating application:', error);
      return { success: false, error: error.message };
    }
  },

  // Update application
  async update(id, appData) {
    try {
      const { data, error } = await supabase
        .from('applications')
        .update(appData)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('[v0] Error updating application:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete application
  async delete(id) {
    try {
      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('[v0] Error deleting application:', error);
      return { success: false, error: error.message };
    }
  }
};

console.log('[v0] Supabase client initialized');
