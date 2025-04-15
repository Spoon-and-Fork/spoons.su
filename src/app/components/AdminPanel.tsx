"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/provider/authProvider";

export default function AdminPanel() {
  const { token } = useAuth();
  const [users, setUsers] = useState<{ username: string }[]>([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [service, setService] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (response.ok) {
          setUsers(data.users);
        } else {
          setError(data.error || "Ошибка загрузки пользователей");
        }
      } catch (err) {
        setError("Ошибка сети"+err);
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!username || !password) {
      setError("Заполните все поля!");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Пользователь создан успешно!");
        setUsername("");
        setPassword("");
        setRole("user");
      } else {
        setError(data.error || "Ошибка при создании пользователя");
      }
    } catch (err) {
      setError("Ошибка сети"+err);
    }
  };

  const handleAddAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!selectedUser || !service || !accountLogin || !accountPassword) {
      setError("Заполните все поля!");
      return;
    }

    try {
      const response = await fetch("/api/add-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: selectedUser, service, login: accountLogin, password: accountPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Аккаунт добавлен успешно!");
        setService("");
        setAccountLogin("");
        setAccountPassword("");
      } else {
        setError(data.error || "Ошибка при добавлении аккаунта");
      }
    } catch (err) {
      setError("Ошибка сети"+err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Админ-панель</h1>
        <p className="text-gray-600 text-center mt-2">Управление пользователями и аккаунтами</p>

        <form onSubmit={handleCreateUser} className="mt-4 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Добавить пользователя</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Логин"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Пароль"
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded-lg">
            <option value="user">Пользователь</option>
            <option value="admin">Администратор</option>
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Создать пользователя
          </button>
        </form>

        <form onSubmit={handleAddAccount} className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Добавить аккаунт пользователю</h2>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Выберите пользователя</option>
            {users.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Сервис (например, Gmail)"
          />
          <input
            type="text"
            value={accountLogin}
            onChange={(e) => setAccountLogin(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Логин"
          />
          <input
            type="password"
            value={accountPassword}
            onChange={(e) => setAccountPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Пароль"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Добавить аккаунт
          </button>
        </form>

        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}
