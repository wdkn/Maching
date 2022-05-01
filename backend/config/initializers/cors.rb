Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3000" # React���̓|�[�g�ԍ�3000�ō��̂Łulocalhost:3000�v���w��

    resource "*",
      headers: :any,
      expose: ["access-token", "expiry", "token-type", "uid", "client"], # �ǋL
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end